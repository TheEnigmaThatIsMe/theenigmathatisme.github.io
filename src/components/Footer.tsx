import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{ bgcolor: "primary.main", color: "primary.contrastText", textAlign: "center", py: 2 }}
        >
            <Typography variant="body1">
                Made with{" "}
                <FavoriteIcon
                    titleAccess="love"
                    sx={{ color: red[500], fontSize: "1em", verticalAlign: "-0.125em" }}
                />{" "}
                in the U.S.A.
            </Typography>
            <Typography variant="body1">&copy; {new Date().getFullYear()} George Gilmartin</Typography>
        </Box>
    );
};

export default Footer;
