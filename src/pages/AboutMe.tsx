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
            <Typography variant="body1" color="textSecondary" component="p">
                A passionate engineer with expertise in backend development, API integration, and event-driven architecture. I excel in creating scalable, high-performance systems.
                With over 7 years of experience in backend and API development, I have a proven track record of delivering impactful solutions in various domains from game studios, public safety platforms, and financial operations.
            </Typography>
            <br/>
            <Typography variant="body1" color="textSecondary" component="p">
                During my tenure at AT&T, I led projects that saved over $30M annually and significantly improved operational efficiency. At N3TWORK Studios, I contributed to the success of Triumph: Go Infinite, enhancing user retention with cutting-edge gameplay features.
            </Typography>
            <br/>
            <Typography variant="body1" color="textSecondary">
                I am a lifelong learner with dual degrees in Computer Science and Information Technology, complemented by certifications in MongoDB Development and SAFe Agile methodologies.
            </Typography>
        </Box>
    );
};

export default AboutMe;
