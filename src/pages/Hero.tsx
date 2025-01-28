import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import AboutMe from "./AboutMe.tsx";
import Highlights from "./Highlights.tsx";

const Hero: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <Typography variant="h2">
                Hi, I'm George Gilmartin
            </Typography>
            <Stack direction="row" spacing={2} sx={{ padding: "1rem" }}>
                <Button variant="contained" color="primary" href="/portfolio">
                    View My Work
                </Button>
                <Button variant="outlined" href="src/assets/Gilmartin_Resume.pdf" download>
                    Download Resume
                </Button>
                <Button variant="outlined" href="https://www.linkedin.com/in/ggilmartin" target="_blank" rel="noopener noreferrer">
                    Get in Touch
                </Button>
            </Stack>
            <AboutMe />
            <Highlights />
        </Box>
    );
};

export default Hero;
