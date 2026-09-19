import React from "react";
import { AppBar, Button, Container, IconButton, Toolbar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { profile } from "../data/profile.ts";

const Header: React.FC = () => {
    return (
        <AppBar position="sticky" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: "flex-end", gap: 0.5 }}>
                    <Button color="inherit" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                        Resume
                    </Button>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="LinkedIn profile"
                        href={profile.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="GitHub profile"
                        href={profile.gitHubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon fontSize="inherit" />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
