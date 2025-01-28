import React from "react";
import {Box, Card, CardContent, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';

const Highlights: React.FC = () => {
    const projects = [
        {
            title: "Triumph: Go Infinite",
            description:
                "Contributed to the backend development of a mobile RPG game with 2,000+ daily active users. Achieved significant performance optimizations, including an 84% reduction in simulation server packet size.",
        },
        {
            title: "MechID Bot",
            description:
                "Led the development of an enterprise monitoring tool to track expiring credentials, improving batch job efficiency by 500% and enhancing site reliability.",
        },
        {
            title: "Message Queue Bridge",
            description:
                "Architected an event-driven system enabling seamless communication between on-premise and cloud-based applications, saving $10M annually in infrastructure costs.",
        },
    ];

    return (
        <Box
            component="section"
            sx={{
                backgroundColor: "#f5f5f5",
                padding: "2rem",
            }}
        >
            <Typography variant="h4" gutterBottom align="center">
                Project Highlights
            </Typography>
            <Grid container spacing={3}>
                {projects.map((project, index) => (
                    <Grid size={{ xs: 12, sm: 4 }} key={index}>
                        <Card sx={{ height: "100%" }}>
                            <CardContent>
                                <Typography variant="h6">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Highlights;
