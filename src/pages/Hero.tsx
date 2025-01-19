import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import AboutMe from "./AboutMe.tsx";
import Highlights from "./Highlights.tsx";

const Hero: React.FC = () => {
    return (
        <Box
            component="section"
            mt={-6} mb={-8} // These negative margins are used to offset the Header component
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                textAlign: "center",
                backgroundColor: "#f5f5f5",
            }}
        >
            <Typography variant="h2" gutterBottom>
                Hi, I'm George Gilmartin
            </Typography>
            <Stack direction="row" spacing={2} sx={{ marginTop: "1rem", marginBottom: "2rem" }}>
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
