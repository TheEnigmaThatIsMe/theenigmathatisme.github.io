// Shape of public/repos.json, produced by scripts/fetch-repos.mjs.
export type Repo = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    has_pages: boolean;
    fork: boolean;
    archived: boolean;
    topics: string[];
    pushed_at: string;
    languages: string[];
};

export type RepoData = {
    generated_at: string;
    repos: Repo[];
};
