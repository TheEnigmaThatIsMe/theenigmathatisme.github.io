import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';

type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string;
    updated_at: string;
};

const Portfolio: React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch("https://api.github.com/users/theenigmathatisme/repos");
                const data: Repo[] = await response.json();
                setRepos(sortRepos(data));
            } catch (err) {
                setError((err as Error).message);
            }
        };

        fetchRepos();
    }, []);

    const sortRepos = (repos: Repo[]) => {
        return repos.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
    }

    return (
        <section id="portfolio">
            <Typography variant="h4" align="center" sx={{ marginBottom: "2em" }}>
                Personal Portfolio
            </Typography>
            {error ? (
                <Typography color="error" align="center">
                    Error: {error}
                </Typography>
            ) : (
                <Grid container spacing={3}>
                    {repos.map((repo) => (
                        <Grid size={{ xs: 12, sm: 4 }} key={repo.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">
                                        {repo.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {repo.description || "No description available."}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        color="primary"
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View on GitHub
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </section>
    );
};

export default Portfolio;
