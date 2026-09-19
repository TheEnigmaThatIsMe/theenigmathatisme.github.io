import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Repo } from "../types/types.ts";

type PortfolioItemProps = {
    repo: Repo;
};

const GITHUB_PAGES_ORIGIN = "https://theenigmathatisme.github.io";

// A repo with a homepage set, or with GitHub Pages enabled, has something to show live.
const liveUrlFor = (repo: Repo): string | null => {
    if (repo.homepage) return repo.homepage;
    if (repo.has_pages) return `${GITHUB_PAGES_ORIGIN}/${repo.name}/`;
    return null;
};

export const PortfolioItem: React.FC<PortfolioItemProps> = ({ repo }) => {
    const liveUrl = liveUrlFor(repo);

    return (
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h3" gutterBottom>
                    {repo.name}
                </Typography>
                {repo.description && (
                    <Typography variant="body2" color="text.secondary">
                        {repo.description}
                    </Typography>
                )}
                {repo.languages.length > 0 && (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Technologies: {repo.languages.join(", ")}
                    </Typography>
                )}
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
