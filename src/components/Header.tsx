import React from "react";
import { AppBar, Button, Container, IconButton, Toolbar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header: React.FC = () => {
    return (
        <AppBar position="sticky" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: "flex-end", gap: 0.5 }}>
                    <Button
                        color="inherit"
                        href={`${import.meta.env.BASE_URL}Gilmartin_Resume.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </Button>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="LinkedIn profile"
                        href="https://www.linkedin.com/in/ggilmartin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="GitHub profile"
                        href="https://github.com/TheEnigmaThatIsMe"
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
