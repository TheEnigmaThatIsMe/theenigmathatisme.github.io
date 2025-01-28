import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Typography } from "@mui/material";
import theme from "../theme";
import {red} from "@mui/material/colors";

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.primary,
                color: theme.secondary,
                textAlign: "center",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                bottom: 0,
                left: 0,
                width: "100%", // Ensure it spans the entire width
            }}
        >
            <Typography variant="body1">
                Made with <FavoriteIcon sx={{ color: red["500"] }} /> in the U.S.A.
            </Typography>
            <Typography variant="body1">
                &copy; 2025 George Gilmartin
            </Typography>
        </Box>
    );
};

export default Footer;
