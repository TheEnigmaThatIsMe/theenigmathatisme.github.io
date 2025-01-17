import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Container, Typography } from "@mui/material";
import theme from "../theme";

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.primary,
                color: theme.secondary,
                textAlign: "center",
                padding: "1rem",
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%", // Ensure it spans the entire width
                zIndex: 1000, // Keeps it above other elements if necessary
            }}
        >
            <Container>
                <Typography variant="body1">
                    Made with <FavoriteIcon sx={{ color: theme.accent }} /> in the U.S.A. &copy; 2025 George Gilmartin
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
