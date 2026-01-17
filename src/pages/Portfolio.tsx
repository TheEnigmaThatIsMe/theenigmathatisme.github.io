import React, { useEffect, useState } from "react";
import {Typography, Box} from "@mui/material";
import { Grid } from "@mui/material";
import {ApiError, Repo} from "../types/types.ts";
import {PortfolioItem} from "../components/PortfolioItem.tsx";

const Portfolio: React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [repoError, setRepoError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch("https://api.github.com/users/theenigmathatisme/repos");
                if(response.status === 200) {
                    const data: Repo[] = await response.json();
                    setRepos(sortRepos(data));
                } else {
                    const data: ApiError = await response.json();
                    setRepoError(data.message);
                }
            } catch (err) {
                setRepoError((err as Error).message);
                console.log(repoError);
            }
        };

        fetchRepos();
    }, []);

    const sortRepos = (repos: Repo[]) => {
        return repos.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
    }

    return (
        <Box component={"section"} sx={{ padding: "2rem" }}>
            <Typography variant="h4" align="left" sx={{ marginBottom: "1em", fontFamily: "Bebas Neue" }}>
                Personal Portfolio
            </Typography>
            <Typography variant="body1" align="left" sx={{ marginBottom: "2em", fontFamily: "Montserrat Variable" }}>
                Explore my development projects, showcasing my skills in web development, software engineering, and problem solving.
                Each project highlights my work across both front-end and backend-end development.
            </Typography>
            {repoError ? (
                <Typography color="error" align="center">
                    Error: {repoError}
                </Typography>
            ) : (
                <Grid container spacing={3}>
                    {repos.map((repo) => (
                        <Grid size={{ xs: 12, sm: 4 }} key={repo.id}>
                            <PortfolioItem repo={repo} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default Portfolio;
