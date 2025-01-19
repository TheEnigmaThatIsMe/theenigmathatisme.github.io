import React from "react";
import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact: React.FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            width="100vw"
            position="absolute"
            top="0"
            left="0"
        >
            <IconButton
                component="a"
                href="https://www.linkedin.com/in/ggilmartin"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: 100, color: "#0e76a8", margin: 2 }}
            >
                <LinkedInIcon fontSize="inherit" />
            </IconButton>
            <IconButton
                component="a"
                href="https://github.com/TheEnigmaThatIsMe"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: 100, color: "black", margin: 2 }}
            >
                <GitHubIcon fontSize="inherit" />
            </IconButton>
        </Box>
    );
};

export default Contact;