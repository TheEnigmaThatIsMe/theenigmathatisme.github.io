import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <AppBar position="fixed" sx={{ top: 0 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        George Gilmartin - Senior Software Engineer
                    </NavLink>
                </Typography>
                <Button color="inherit" component={NavLink} to="/" style={{ textDecoration: 'none' }}>
                    Home
                </Button>
                <Button color="inherit" component={NavLink} to="/portfolio" style={{ textDecoration: 'none' }}>
                    Portfolio
                </Button>
                <Button color="inherit" component={NavLink} to="/contact" style={{ textDecoration: 'none' }}>
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;