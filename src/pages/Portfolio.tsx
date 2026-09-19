import React, { useEffect, useState } from "react";
import { Box, Grid, Link, Skeleton, Typography } from "@mui/material";
import { Repo, RepoData } from "../types/types.ts";
import { PortfolioItem } from "../components/PortfolioItem.tsx";

// Generated at build time by scripts/fetch-repos.mjs.
const REPO_DATA_URL = `${import.meta.env.BASE_URL}repos.json`;

const CARD_GRID = { xs: 12, sm: 6, md: 4 };

const Portfolio: React.FC = () => {
    const [repos, setRepos] = useState<Repo[] | null>(null);
    const [loadFailed, setLoadFailed] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        fetch(REPO_DATA_URL, { signal: controller.signal })
            .then((response) => {
                if (!response.ok) throw new Error(`${response.status} ${response.statusText} loading ${REPO_DATA_URL}`);
                return response.json() as Promise<RepoData>;
            })
            .then((data) => setRepos(data.repos))
            .catch((err: unknown) => {
                if ((err as Error).name === "AbortError") return;
                console.error(err);
                setLoadFailed(true);
            });
        return () => controller.abort();
    }, []);

    let content: React.ReactNode;
    if (loadFailed) {
        content = (
            <Typography variant="body1">
                The project list could not be loaded. You can browse everything on{" "}
                <Link href="https://github.com/TheEnigmaThatIsMe?tab=repositories" target="_blank" rel="noopener noreferrer">
                    GitHub
                </Link>
                .
            </Typography>
        );
    } else if (repos === null) {
        content = (
            <Grid container spacing={3} aria-busy="true" aria-label="Loading projects">
                {[0, 1, 2].map((i) => (
                    <Grid size={CARD_GRID} key={i}>
                        <Skeleton variant="rounded" height={160} />
                    </Grid>
                ))}
            </Grid>
        );
    } else if (repos.length === 0) {
        content = <Typography variant="body1">No projects to show yet.</Typography>;
    } else {
        content = (
            <Grid container spacing={3}>
                {repos.map((repo) => (
                    <Grid size={CARD_GRID} key={repo.id}>
                        <PortfolioItem repo={repo} />
                    </Grid>
                ))}
            </Grid>
        );
    }

    return (
        <Box component="section">
            <Typography variant="h2" gutterBottom>
                Personal Portfolio
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "68ch", mb: 4 }}>
                Personal projects, from a browser game I still tinker with to coursework from a decade ago.
            </Typography>
            {content}
        </Box>
    );
};

export default Portfolio;
