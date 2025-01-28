import React from 'react';
import { AppBar, Toolbar, Typography, Button, Accordion, AccordionSummary, AccordionDetails, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header: React.FC = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <AppBar position="relative" sx={{ top: 0, zIndex: 1000 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        George Gilmartin - Senior Software Engineer
                    </NavLink>
                </Typography>

                {isSmallScreen ? (
                    <Accordion sx={{ backgroundColor: 'primary.main', boxShadow: 'none' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="nav-content" id="nav-header">
                            <Typography color={"white"}>Menu</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <NavLink to="/" style={{ textDecoration: 'none', font: "menu", color: 'white', display: 'block', margin: '8px 0' }}>
                                Home
                            </NavLink>
                            <NavLink to="/portfolio" style={{ textDecoration: 'none', font: "menu", color: 'white', display: 'block', margin: '8px 0' }}>
                                Portfolio
                            </NavLink>
                            <NavLink to="/contact" style={{ textDecoration: 'none', font: "menu", color: 'white', display: 'block', margin: '8px 0' }}>
                                Contact
                            </NavLink>
                        </AccordionDetails>
                    </Accordion>
                ) : (
                    <>
                        <Button color="inherit" component={NavLink} to="/">
                            Home
                        </Button>
                        <Button color="inherit" component={NavLink} to="/portfolio">
                            Portfolio
                        </Button>
                        <Button color="inherit" component={NavLink} to="/contact">
                            Contact
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;