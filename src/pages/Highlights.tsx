import React from "react";
import {Box, Card, CardContent, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';

const Highlights: React.FC = () => {
    const projects = [
        {
            title: "Legnedary Heroes Unchained",
            company: "N3TWORK Studios",
            location: "Remote",
            position: "Senior Software Engineer",
            technologies: "Java/Spring/Gradle, C#, Python, Solidity, React, TypeScript, AWS, Redis, DynamoDB, Thrift, TestNG, Docker, Terraform",
            description:
            "Redesigned core systems for Legendary Heroes Unchained, expanding into Unity development and Web3. Developed and tested ERC-20 smart contracts in Solidity, enabling on-chain progression and token ownership. Integrated blockchain features into gameplay, bridging Unity with backend and wallet systems.",
        },
        {
            title: "AI Game Feed",
            company: "N3TWORK Studios",
            location: "Remote",
            position: "Senior Software Engineer",
            technologies: "Java/Spring, AWS, Redis, PostgreSQL, JUnit, Docker, Terraform, Model Context Protocol (MCP)",
            description:
            "Led backend development of the AI Game Feed, a scalable content delivery platform designed to surface personalized gameplay updates, highlights, and recommendations across multiple live titles. Architected robust Java-based APIs and data pipelines to aggregate and distribute player-specific content in real-time, leveraging S3-backed media storage and AI-curated logic.",
        },
        {
            title: "Triumph: Go Infinite",
            company: "N3TWORK Studios",
            location: "Remote",
            position: "Senior Software Engineer",
            technologies: "Java/Spring/Gradle, C#, Python, Go, React, TypeScript, AWS, Redis, DynamoDB, Thrift, TestNG, Docker, Terraform",
            description:
            "Supported the game's soft launch, scaling to 2,000+ daily active users, while optimizing backend efficiency by reducing simulation server packet size by 84%, server configuration file size by 73%, and client configuration file size by 25%. Additionally, implemented customer support tooling in React, enhancing player support and operational efficiency.",
        },
        {
            title: "MechID Bot",
            company: "AT&T",
            location: "Remote",
            position: "Senior Software Engineer",
            technologies: "Java/Spring/Maven, microServices, Azure, Terraform, React, JUnit, Sonar",
            description:
                "Spearheaded the development of an enterprise monitoring solution that tracks expiring credentials like passwords and SSL certificates, ensuring proactive renewals and decreasing the batch job runtime by 98%. Enhanced company-wide site reliability by automating email and messaging alerts to teams.",
        },
        {
            title: "Message Queue Bridge",
            company: "AT&T",
            location: "Remote",
            position: "Senior Software Engineer",
            technologies: "Java/Spring/Maven, microServices, Azure, Kubernetes/Helm, Kafka, Terraform, JUnit, Sonar",
            description:
                "Designed and implemented a Kafka-based event-driven architecture enabling real-time communication between on-premise and cloud-based applications, reducing company costs by $10M+ annually. Led discussions on scalability, resiliency, and maintainability, ensuring a robust and future-proof system.",
        },
        {
            title: "9-1-1 Public Safety Platform",
            company: "AT&T",
            location: "Chicago, IL",
            position: "Professional Software Engineer",
            technologies: "Java/Spring/Maven, Oracle SQL, Redis, Jenkins, Kubernetes, JUnit",
            description:
                "Contributed to the development of E911 services, ensuring precise location delivery with 99.999% uptime and sub-1-second response times. Helped reduce costs by $21M+ annually by developing services in-house and integrating key public safety protocols.",
        },
        {
            title: "Bolt (Financial Operations)",
            company: "AT&T",
            location: "Chicago, IL",
            position: "Professional Software Engineer",
            technologies: "Java/Spring/Maven, AngularJS, HTML/CSS, Oracle SQL, Jenkins, Sonar, JUnit",
            description:
                "Enhanced a financial tracking tool managing PTO, time entry, and billing by implementing backend optimizations and front-end enhancements. Improved test coverage to over 90% and streamlined CI/CD deployments.",
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
                During my time at N3TWORK Studios, I was a key contributor to the backend development of <a href="https://www.n3twork.com/triumph/" target="_blank">Triumph: Go Infinite</a>, a mobile RPG built around strategic hero and gear collection, dynamic weekly events, and engaging gameplay. 
                I also led backend efforts on the AI Game Feed, a scalable content delivery system powering personalized updates and recommendations across live titles. 
                Additionally, I contributed to the redesign of <a href="https://www.legendaryheroesunchained.com/home" target="_blank">Legendary Heroes Unchained</a>, expanding into Unity and Web3 by integrating smart contracts written in Solidity to enable on-chain progression and asset ownership.
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
                                    {project.title} - {project.company} ({project.location})
                                </Typography>
                                <Typography variant="subtitle2" sx={{ fontFamily: "Montserrat Variable" }}>
                                    {project.position}
                                </Typography>
                                <Typography variant="body2" sx={{ paddingTop: "1em", fontFamily: "Montserrat Variable" }}>
                                    Technologies: {project.technologies}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" sx={{ paddingTop: "1em", fontFamily: "Montserrat Variable" }}>
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
