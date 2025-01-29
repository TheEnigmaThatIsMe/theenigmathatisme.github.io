import React from "react";
import {Box, Card, CardContent, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';

const Highlights: React.FC = () => {
    const projects = [
        {
            title: "Triumph: Go Infinite",
            company: "N3TWORK Studios",
            position: "Senior Software Engineer",
            description:
                "Contributed to the backend development of a mobile RPG game with 2,000+ daily active users. Achieved significant performance optimizations, including an 84% reduction in simulation server packet size.",
        },
        {
            title: "MechID Bot",
            company: "AT&T",
            position: "Senior Software Engineer",
            description:
                "Spearheaded the development of an enterprise monitoring solution that tracks expiring credentials like passwords and SSL certificates, ensuring proactive renewals and improving operational efficiency by 500%. Enhanced company-wide site reliability by automating email and messaging alerts to teams",
        },
        {
            title: "Message Queue Bridge",
            company: "AT&T",
            position: "Senior Software Engineer",
            description:
                "Designed and implemented a Kafka-based event-driven architecture enabling real-time communication between on-premise and cloud-based applications, reducing company costs by $10M+ annually. Led discussions on scalability, resiliency, and maintainability, ensuring a robust and future-proof system",
        },
        {
            title: "9-1-1 Public Safety Platform",
            company: "AT&T",
            position: "Professional Software Engineer",
            description:
                "Contributed to the development of E911 services, ensuring precise location delivery with 99.999% uptime and sub-1-second response times. Helped reduce costs by $21M+ annually by developing services in-house and integrating key public safety protocols",
        },
        {
            title: "Bolt (Financial Operations)",
            company: "AT&T",
            position: "Professional Software Engineer",
            description:
                "Enhanced a financial tracking tool managing PTO, time entry, and billing by implementing backend optimizations and front-end enhancements. Improved test coverage to over 90% and streamlined CI/CD deployments ",
        },
    ];

    return (
        <Box
            component="section"
            sx={{
                padding: "0.5rem 2rem 0.5rem 2rem",
            }}
        >
            <Typography variant="h4" gutterBottom align="left" sx={{ fontFamily: "Bebas Neue" }}>
                Career Highlights
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" sx={{ fontFamily: "Montserrat Variable", marginBottom:"1em" }}>
                During my time at N3TWORK Studios, I played a key role in the success of Triumph: Go Infinite,
                driving user retention through innovative gameplay features.
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" sx={{ fontFamily: "Montserrat Variable", marginBottom:"1em" }}>
                At AT&T, I led and contributed to multiple high-impact projects that drove efficiency, reduced costs,
                and improved operational resilience across various enterprise domains. Through these initiatives,
                I played a key role in saving over $30M annually, optimizing critical business operations,
                and fortifying AT&T’s technical infrastructure.
            </Typography>
            <Grid container spacing={3}>
                {projects.map((project, _) => (
                    <Grid size={{ xs: 12, sm: 4 }} key={project.title}>
                        <Card sx={{ height: "100%", backgroundColor: "#fafafa" }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontFamily: "Bebas Neue" }}>
                                    {project.title} - {project.company}
                                </Typography>
                                <Typography variant="subtitle2" sx={{ fontFamily: "Montserrat Variable" }}>
                                    {project.position}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" sx={{ fontFamily: "Montserrat Variable" }}>
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Highlights;
