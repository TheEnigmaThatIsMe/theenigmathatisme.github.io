// Curation rules for the personal portfolio grid.
//
// "Featured" is a name list here rather than a GitHub `portfolio` topic because
// none of the repos carry topics yet. The predicate honours the topic as well, so
// tagging a repo on GitHub later promotes it with no code change; the list only
// controls the order of the ones named in it.
import { Repo } from "../types/types.ts";

export const FEATURED_TOPIC = "portfolio";

export const FEATURED_REPOS = [
    "tiny_swords",
    "TerraQuake",
    "RandomSubjectLine",
    "MazeRunnerGo",
    "go-space-shooter",
] as const;

// Repo names the rules below would mangle. TerraQuake is one word on purpose.
const DISPLAY_NAME_OVERRIDES: Record<string, string> = {
    TerraQuake: "TerraQuake",
    "nodeJS-wordFinder": "Node.js Word Finder",
    "Multi-thread-Matrix-Multiplication": "Multi-thread Matrix Multiplication",
};

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

// "tiny_swords" -> "Tiny Swords"; "CS4320_Final_Project" -> "CS4320 Final Project".
// Chunks that are already all caps or digits (CS4320, C) are left alone; the rest
// split on lowercase-to-uppercase boundaries so "BallotBuddy" reads as two words.
// Display only: every link still targets the real repo name.
export const displayName = (name: string): string =>
    DISPLAY_NAME_OVERRIDES[name] ??
    name
        .split(/[_-]+/)
        .flatMap((chunk) =>
            /^[A-Z0-9]+$/.test(chunk) ? [chunk] : chunk.replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(" ").map(capitalize),
        )
        .join(" ");

const updatedFormat = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" });

export const updatedLabel = (pushedAt: string): string => updatedFormat.format(new Date(pushedAt));

export const isFeatured = (repo: Repo): boolean =>
    repo.topics.includes(FEATURED_TOPIC) || (FEATURED_REPOS as readonly string[]).includes(repo.name);

// Featured first in the order listed above, then everything else newest first.
// Forks and archived repos are dropped: they are not work worth showing.
export const curateRepos = (repos: Repo[]): Repo[] => {
    const rank = (repo: Repo) => {
        const index = (FEATURED_REPOS as readonly string[]).indexOf(repo.name);
        if (index >= 0) return index;
        return isFeatured(repo) ? FEATURED_REPOS.length : Number.MAX_SAFE_INTEGER;
    };

    return repos
        .filter((repo) => !repo.fork && !repo.archived)
        .sort((a, b) => rank(a) - rank(b) || b.pushed_at.localeCompare(a.pushed_at));
};
