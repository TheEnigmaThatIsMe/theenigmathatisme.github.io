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
        <Card variant="outlined" sx={{ height: "100%", backgroundColor: "#fafafa" }}>
            <CardContent>
                <Typography variant="h6" component="h3" sx={{ fontFamily: "Bebas Neue" }}>
                    {repo.name}
                </Typography>
                {repo.description && (
                    <Typography variant="body2" color="textSecondary" sx={{ fontFamily: "Montserrat Variable" }}>
                        {repo.description}
                    </Typography>
                )}
                {repo.languages.length > 0 && (
                    <Typography variant="body2" color="textSecondary" sx={{ fontFamily: "Montserrat Variable" }}>
                        Technologies: {repo.languages.join(", ")}
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub
                </Button>
                {liveUrl && (
                    <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Live
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};
