import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import "../css/Portfolio.css";

type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string;
};

const Portfolio: React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch("https://api.github.com/users/theenigmathatisme/repos");
                if (!response.ok) {
                    throw new Error("Failed to fetch repositories");
                }
                const data: Repo[] = await response.json();
                setRepos(data);
            } catch (err) {
                setError((err as Error).message);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section id="portfolio">
            <Typography variant="h4" align="center" gutterBottom>
                Portfolio
            </Typography>
            {error ? (
                <Typography color="error" align="center">
                    Error: {error}
                </Typography>
            ) : (
                <div className="portfolio-container">
                    {repos.map((repo) => (
                        <div className="portfolio-item" key={repo.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
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
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Portfolio;
