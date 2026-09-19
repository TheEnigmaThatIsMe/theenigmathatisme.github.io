import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { skillGroups } from "../data/skills.ts";

const AboutMe: React.FC = () => {
    return (
        <Grid container component="section" spacing={{ xs: 5, md: 6 }}>
            <Grid size={{ xs: 12, md: 8 }}>
                <Typography variant="h2" gutterBottom>
                    About Me
                </Typography>
                <Stack spacing={2} sx={{ maxWidth: "68ch" }}>
                    <Typography variant="body1" color="text.secondary">
                        The domains have changed more than the work has: financial operations and public safety
                        dispatch at AT&amp;T, then live services for mobile games at N3TWORK. Nearly a decade of
                        it comes down to the same two questions &mdash; can the system take real traffic without
                        falling over, and can it run for less than it did last year. The answers tend to be
                        unglamorous: better queueing, fewer round trips, tests that fail when something is
                        actually broken.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Dual degrees in Computer Science and Information Technology, with minors in Math and
                        Business. Certified in MongoDB Development and SAFe Agile.
                    </Typography>
                </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h2" gutterBottom>
                    Skills
                </Typography>
                <Stack spacing={2.5} sx={{ mt: 1 }}>
                    {skillGroups.map((group) => (
                        <Stack key={group.heading} spacing={0.5}>
                            <Typography variant="body1" component="h3" sx={{ fontWeight: 600 }}>
                                {group.heading}
                            </Typography>
                            <Stack
                                component="ul"
                                direction="row"
                                useFlexGap
                                flexWrap="wrap"
                                sx={{
                                    listStyle: "none",
                                    m: 0,
                                    p: 0,
                                    columnGap: 0.75,
                                    rowGap: 0.25,
                                    // Commas come from CSS so the markup stays a real list.
                                    "& li:not(:last-of-type)::after": { content: '","' },
                                }}
                            >
                                {group.skills.map((skill) => (
                                    <Typography key={skill} component="li" variant="body1" color="text.secondary">
                                        {skill}
                                    </Typography>
                                ))}
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Grid>
        </Grid>
    );
};

export default AboutMe;
