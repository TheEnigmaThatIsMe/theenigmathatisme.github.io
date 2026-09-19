// Fetches the public repositories (plus each one's language list) for the GitHub
// user below and writes them to public/repos.json.
//
// The site reads that file at runtime instead of calling the GitHub API from the
// browser, which kept hitting the 60 requests/hour unauthenticated limit.
// The deploy workflow runs this before every build with GITHUB_TOKEN set; the
// committed copy keeps `npm run dev` working without a token.
import { mkdir, writeFile } from "node:fs/promises";

const USER = "TheEnigmaThatIsMe";
const SITE_REPO = "theenigmathatisme.github.io"; // the portfolio itself; not a project
const OUT_DIR = new URL("../public/", import.meta.url);
const OUT_FILE = new URL("repos.json", OUT_DIR);

const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": SITE_REPO,
};
if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

async function getJson(url) {
    const response = await fetch(url, { headers });
    if (!response.ok) {
        throw new Error(`GitHub API returned ${response.status} ${response.statusText} for ${url}`);
    }
    return response.json();
}

const all = await getJson(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`);
const repos = [];
for (const repo of all) {
    if (repo.name.toLowerCase() === SITE_REPO) continue;
    const languages = await getJson(repo.languages_url);
    repos.push({
        id: repo.id,
        name: repo.name,
        description: repo.description ?? "",
        html_url: repo.html_url,
        homepage: repo.homepage ?? "",
        has_pages: repo.has_pages,
        fork: repo.fork,
        archived: repo.archived,
        topics: repo.topics ?? [],
        pushed_at: repo.pushed_at,
        languages: Object.keys(languages),
    });
}
repos.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

await mkdir(OUT_DIR, { recursive: true });
await writeFile(OUT_FILE, JSON.stringify({ generated_at: new Date().toISOString(), repos }, null, 2) + "\n");
console.log(`Wrote ${repos.length} repositories to public/repos.json`);
