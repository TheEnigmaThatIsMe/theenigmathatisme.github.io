import React from "react";
import { Box, Typography } from "@mui/material";
import AboutMe from "./AboutMe.tsx";
import Highlights from "./Highlights.tsx";
import Portfolio from "./Portfolio.tsx";
import "@fontsource/bebas-neue/400.css";
import "@fontsource-variable/montserrat/wght.css";

const Hero: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "left",
                textAlign: "left",
                paddingLeft: "1rem",
            }}
        >
            <Typography variant="h1" sx={{ fontFamily: "Bebas Neue" }}>
                George Gilmartin
            </Typography>
            <Typography variant="h3" sx={{ fontFamily: "Montserrat Variable" }}>
                Senior Software Engineer
            </Typography>
            <AboutMe />
            <Highlights />
            <Portfolio />
        </Box>
    );
};

export default Hero;
