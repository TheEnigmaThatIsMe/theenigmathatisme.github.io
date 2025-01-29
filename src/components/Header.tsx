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
                        href={"https://github.com/TheEnigmaThatIsMe/theenigmathatisme.github.io/blob/master/src/assets/Gilmartin_Resume.pdf"}
                        target="_blank"
                        rel="noopener noreferrer">
                    Resume
                </Button>
                <IconButton
                    size={"large"}
                    component="a"
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