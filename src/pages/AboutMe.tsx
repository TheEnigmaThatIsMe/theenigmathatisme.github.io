import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const AboutMe: React.FC = () => {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8 }}>
                <Box
                    component="section"
                    sx={{
                        backgroundColor: "#ffffff",
                        padding: "2rem 2rem 1rem 2rem",
                        textAlign: "left",
                    }}
                >
                    <Typography variant="h4" sx={{ fontFamily: "Bebas Neue" }}>
                        About Me
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" sx={{ fontFamily: "Montserrat Variable" }}>
                        A passionate engineer with expertise in backend development, API integration, and event-driven
                        architecture. I excel in creating scalable, high-performance systems. With over 7 years of
                        experience in backend and API development, I have a proven track record of delivering impactful
                        solutions in various domains from game studios, public safety platforms, and financial operations.
                    </Typography>
                    <br/>
                    <Typography variant="body1" color="textSecondary" component="p" sx={{ fontFamily: "Montserrat Variable" }}>
                        I am driven by a passion for clean, maintainable code, I strive to build scalable solutions that
                        not only enhance user experience but also drive significant business growth and cost savings.
                        My goal is to create innovative, high-impact systems that transform products and industries,
                        delivering meaningful change through technology.
                    </Typography>
                    <br/>
                    <Typography variant="body1" color="textSecondary" component="p" sx={{ fontFamily: "Montserrat Variable" }}>
                        I am a lifelong learner with dual degrees in Computer Science and Information Technology,
                        along with minors in Math and Business. Complementing my academic background, I hold
                        certifications in MongoDB Development and SAFe Agile methodologies. Committed to continuous growth,
                        I stay at the forefront of emerging technologies and best practices to consistently deliver innovative,
                        high-impact solutions.
                    </Typography>
                </Box>
            </Grid>
            <Grid>
                <Box component="section"
                     sx={{
                         backgroundColor: "#ffffff",
                         padding: "2rem 2rem 1rem 2rem",
                         textAlign: "left",
                     }}>
                    <Typography variant="h4" sx={{ fontFamily: "Bebas Neue" }}>
                        Skills
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" sx={{ fontFamily: "Montserrat Variable" }}>
                        Java / Spring (7 years)
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" sx={{ fontFamily: "Montserrat Variable" }}>
                        Backend Development (7 years)
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" sx={{ fontFamily: "Montserrat Variable" }}>
                        API Development (7 years)
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" sx={{ fontFamily: "Montserrat Variable" }}>
                        Web Development (5 years)
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" sx={{ fontFamily: "Montserrat Variable" }}>
                        Full Stack Development (5 years)
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" sx={{ fontFamily: "Montserrat Variable" }}>
                        Python (3 years)
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" sx={{ fontFamily: "Montserrat Variable" }}>
                        Go (1 years)
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default AboutMe;
