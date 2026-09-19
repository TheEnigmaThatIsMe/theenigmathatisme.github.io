import React from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    IconButton, Link
} from '@mui/material';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header: React.FC = () => {
    return (
        <AppBar position="fixed" sx={{ top: 0, zIndex: 1000 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'end' }}>
                <Button color="inherit"
                        component={Link}
                        href={`${import.meta.env.BASE_URL}Gilmartin_Resume.pdf`}
                        target="_blank"
                        rel="noopener noreferrer">
                    Resume
                </Button>
                <IconButton
                    size={"large"}
                    component="a"
                    aria-label="LinkedIn profile"
                    href="https://www.linkedin.com/in/ggilmartin"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "white" }}
                >
                    <LinkedInIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                    size={"large"}
                    component="a"
                    aria-label="GitHub profile"
                    href="https://github.com/TheEnigmaThatIsMe"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "white" }}
                >
                    <GitHubIcon fontSize="inherit" />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;