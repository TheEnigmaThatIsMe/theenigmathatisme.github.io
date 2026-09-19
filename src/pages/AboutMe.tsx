import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

const skills = [
    "Java / Spring (7 years)",
    "Backend Development (7 years)",
    "API Development (7 years)",
    "Web Development (5 years)",
    "Full Stack Development (5 years)",
    "Python (3 years)",
    "Go (1 year)",
];

const AboutMe: React.FC = () => {
    return (
        <Grid container component="section" spacing={{ xs: 5, md: 6 }}>
            <Grid size={{ xs: 12, md: 8 }}>
                <Typography variant="h2" gutterBottom>
                    About Me
                </Typography>
                <Stack spacing={2} sx={{ maxWidth: "68ch" }}>
                    <Typography variant="body1" color="text.secondary">
                        A passionate engineer with expertise in backend development, API integration, and
                        event-driven architecture. I excel in creating scalable, high-performance systems.
                        With over 7 years of experience in backend and API development, I have a proven track
                        record of delivering impactful solutions in various domains from game studios, public
                        safety platforms, and financial operations.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        I am driven by a passion for clean, maintainable code, I strive to build scalable
                        solutions that not only enhance user experience but also drive significant business
                        growth and cost savings. My goal is to create innovative, high-impact systems that
                        transform products and industries, delivering meaningful change through technology.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        I am a lifelong learner with dual degrees in Computer Science and Information
                        Technology, along with minors in Math and Business. Complementing my academic
                        background, I hold certifications in MongoDB Development and SAFe Agile methodologies.
                        Committed to continuous growth, I stay at the forefront of emerging technologies and
                        best practices to consistently deliver innovative, high-impact solutions.
                    </Typography>
                </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h2" gutterBottom>
                    Skills
                </Typography>
                <Stack component="ul" spacing={0.5} sx={{ listStyle: "none", m: 0, p: 0 }}>
                    {skills.map((skill) => (
                        <Typography key={skill} component="li" variant="body1" color="text.secondary">
                            {skill}
                        </Typography>
                    ))}
                </Stack>
            </Grid>
        </Grid>
    );
};

export default AboutMe;
