import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Repo } from "../types/types.ts";
import { displayName, updatedLabel } from "../data/portfolio.ts";

type PortfolioItemProps = {
    repo: Repo;
};

const GITHUB_PAGES_ORIGIN = "https://theenigmathatisme.github.io";

// GitHub returns every language it detects, ordered by bytes, so the tail collects
// build files (Makefile, Procfile, Gnuplot). The first three carry the signal.
const MAX_LANGUAGES = 3;

// A repo with a homepage set, or with GitHub Pages enabled, has something to show live.
const liveUrlFor = (repo: Repo): string | null => {
    if (repo.homepage) return repo.homepage;
    if (repo.has_pages) return `${GITHUB_PAGES_ORIGIN}/${repo.name}/`;
    return null;
};

export const PortfolioItem: React.FC<PortfolioItemProps> = ({ repo }) => {
    const liveUrl = liveUrlFor(repo);
    const languages = repo.languages.slice(0, MAX_LANGUAGES);

    return (
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h3" gutterBottom>
                    {displayName(repo.name)}
                </Typography>
                {repo.description && (
                    <Typography variant="body2" color="text.secondary">
                        {repo.description}
                    </Typography>
                )}
                {languages.length > 0 && (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        {languages.join(", ")}
                    </Typography>
                )}
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    Updated {updatedLabel(repo.pushed_at)}
                </Typography>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2 }}>
                <Button size="small" variant="outlined" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </Button>
                {liveUrl && (
                    <Button size="small" variant="outlined" href={liveUrl} target="_blank" rel="noopener noreferrer">
                        View Live
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};
