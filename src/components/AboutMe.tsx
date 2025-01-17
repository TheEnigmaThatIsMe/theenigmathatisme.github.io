import React from "react";
import { Box, Typography } from "@mui/material";

const AboutMe: React.FC = () => {
    return (
        <Box
            component="section"
            sx={{
                backgroundColor: "#ffffff",
                padding: "2rem",
                textAlign: "center",
            }}
        >
            <Typography variant="h4" gutterBottom>
                About Me
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
                With over 7 years of experience in backend and API development, I have a proven track record of delivering impactful solutions in various domains, from public safety platforms to financial operations.
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
                During my tenure at AT&T, I led projects that saved over $30M annually and significantly improved operational efficiency. At N3TWORK Studios, I contributed to the success of Triumph: Go Infinite, enhancing user retention with cutting-edge gameplay features.
            </Typography>
            <Typography variant="body1" color="textSecondary">
                I am a lifelong learner with dual degrees in Computer Science and Information Technology, complemented by certifications in MongoDB Development and SAFe Agile methodologies.
            </Typography>
        </Box>
    );
};

export default AboutMe;
