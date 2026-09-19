import React from "react";
import { Box, Card, CardContent, Grid, Link, Typography } from "@mui/material";
import { Highlight, highlights } from "../data/highlights.ts";

const HighlightCard: React.FC<{ highlight: Highlight }> = ({ highlight }) => {
    const title = highlight.url ? (
        <Link href={highlight.url} target="_blank" rel="noopener noreferrer">
            {highlight.title}
        </Link>
    ) : (
        highlight.title
    );

    return (
        <Card sx={{ height: "100%" }}>
            <CardContent>
                {highlight.outcome ? (
                    <>
                        <Typography variant="h3" component="p">
                            {highlight.outcome}
                        </Typography>
                        <Typography variant="body1" component="h3" sx={{ fontWeight: 600, mt: 0.5 }}>
                            {title}
                        </Typography>
                    </>
                ) : (
                    <Typography variant="h3" component="h3">
                        {title}
                    </Typography>
                )}
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {highlight.role} at {highlight.company}, {highlight.location}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    {highlight.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {highlight.technologies.join(", ")}
                </Typography>
            </CardContent>
        </Card>
    );
};

const Highlights: React.FC = () => {
    return (
        <Box component="section">
            <Typography variant="h2" gutterBottom>
                Career Highlights
            </Typography>
            <Grid container spacing={3} sx={{ mt: 1 }}>
                {highlights.map((highlight) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={highlight.title}>
                        <HighlightCard highlight={highlight} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Highlights;
