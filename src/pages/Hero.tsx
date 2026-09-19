import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { profile } from "../data/profile.ts";

const Hero: React.FC = () => {
    return (
        <Box component="section">
            <Typography variant="h1">{profile.name}</Typography>
            <Typography variant="tagline" sx={{ mt: 1 }}>
                {profile.title}
            </Typography>
            <Typography variant="lead" color="text.secondary" sx={{ mt: 3, maxWidth: "54ch" }}>
                {profile.lead}
            </Typography>
            <Stack direction="row" spacing={2} useFlexGap sx={{ mt: 4, flexWrap: "wrap" }}>
                <Button variant="contained" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                    View resume
                </Button>
                <Button variant="outlined" href={`mailto:${profile.email}`}>
                    Email me
                </Button>
            </Stack>
        </Box>
    );
};

export default Hero;
