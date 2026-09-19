import React from "react";
import { Box, Typography } from "@mui/material";

const Hero: React.FC = () => {
    return (
        <Box component="section">
            <Typography variant="h1">George Gilmartin</Typography>
            <Typography variant="tagline" sx={{ mt: 1 }}>
                Senior Software Engineer
            </Typography>
        </Box>
    );
};

export default Hero;
