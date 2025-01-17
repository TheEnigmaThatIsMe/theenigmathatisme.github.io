import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import AboutMe from "./AboutMe.tsx";
import Highlights from "./Highlights.tsx";

const Hero: React.FC = () => {
    return (
        <Box
            component="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                padding: "2rem",
            }}
        >
            <Typography variant="h2" gutterBottom>
                Hi, I'm George Gilmartin
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                A passionate Senior Software Engineer with expertise in backend development, API integration, and event-driven architecture. I excel in creating scalable, high-performance systems.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ marginTop: "1rem" }}>
                <Button variant="contained" color="primary" href="/portfolio">
                    View My Work
                </Button>
                <Button variant="outlined" href="/resume">
                    Download Resume
                </Button>
                <Button variant="outlined" href="/contact">
                    Get in Touch
                </Button>
            </Stack>
            <AboutMe />
            <Highlights />
        </Box>
    );
};

export default Hero;
