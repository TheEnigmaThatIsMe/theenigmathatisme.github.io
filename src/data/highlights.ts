// Career highlights, newest first.
//
// Job titles follow the resume, which is the source of truth. The resume's AT&T
// tenure breaks into four titles: Senior Software Engineer (Dec 2022 - Nov 2023),
// Professional Software Engineer (Dec 2020 - Dec 2022), Sr. Specialist Software
// Engineer (Sep 2018 - Dec 2020), and Associate Specialist Software Engineer
// (Jun 2017 - Sep 2018). The resume names MechID Bot, the Azure/Kafka migration,
// and the 9-1-1 platform directly. It does not name Bolt, whose title is inferred
// from its AngularJS-era position in the timeline.
//
// `outcome` is the single figure the card leads with. Two entries have none, and
// those cards lead with the project name instead. Where an outcome is lifted out,
// the matching clause is removed from the description so the card does not repeat
// itself. Date ranges are deliberately not shown; see plans/ui-improvements.md.
export type Highlight = {
    title: string;
    url?: string;
    company: string;
    location: string;
    role: string;
    outcome?: string;
    technologies: string[];
    description: string;
};

export const highlights: Highlight[] = [
    {
        title: "Legendary Heroes Unchained",
        url: "https://www.legendaryheroesunchained.com/home",
        company: "N3TWORK Studios",
        location: "Remote",
        role: "Senior Software Engineer",
        technologies: ["Java/Spring/Gradle", "C#", "Python", "Solidity", "React", "TypeScript", "AWS", "Redis", "DynamoDB", "Thrift", "TestNG", "Docker", "Terraform"],
        description:
            "Redesigned core systems for Legendary Heroes Unchained, expanding into Unity development and Web3. Developed and tested ERC-20 smart contracts in Solidity, enabling on-chain progression and token ownership. Integrated blockchain features into gameplay, bridging Unity with backend and wallet systems.",
    },
    {
        title: "AI Game Feed",
        company: "N3TWORK Studios",
        location: "Remote",
        role: "Senior Software Engineer",
        technologies: ["Java/Spring", "AWS", "Redis", "PostgreSQL", "JUnit", "Docker", "Terraform", "Model Context Protocol (MCP)"],
        description:
            "Led backend development of the AI Game Feed, a scalable content delivery platform designed to surface personalized gameplay updates, highlights, and recommendations across multiple live titles. Architected robust Java-based APIs and data pipelines to aggregate and distribute player-specific content in real-time, leveraging S3-backed media storage and AI-curated logic.",
    },
    {
        title: "Triumph: Go Infinite",
        url: "https://www.n3twork.com/triumph/",
        company: "N3TWORK Studios",
        location: "Remote",
        role: "Senior Software Engineer",
        outcome: "84% smaller simulation packets",
        technologies: ["Java/Spring/Gradle", "C#", "Python", "Go", "React", "TypeScript", "AWS", "Redis", "DynamoDB", "Thrift", "TestNG", "Docker", "Terraform"],
        description:
            "Supported the game's soft launch, scaling to 2,000+ daily active users, while optimizing backend efficiency: server configuration file size fell 73% and client configuration file size 25%. Additionally, implemented customer support tooling in React, enhancing player support and operational efficiency.",
    },
    {
        title: "MechID Bot",
        company: "AT&T",
        location: "Remote",
        role: "Senior Software Engineer",
        outcome: "98% shorter batch runtime",
        technologies: ["Java/Spring/Maven", "microServices", "Azure", "Terraform", "React", "JUnit", "Sonar"],
        description:
            "Spearheaded the development of an enterprise monitoring solution that tracks expiring credentials like passwords and SSL certificates, ensuring proactive renewals. Enhanced company-wide site reliability by automating email and messaging alerts to teams.",
    },
    {
        title: "Message Queue Bridge",
        company: "AT&T",
        location: "Remote",
        role: "Professional Software Engineer",
        outcome: "$10M+ saved annually",
        technologies: ["Java/Spring/Maven", "microServices", "Azure", "Kubernetes/Helm", "Kafka", "Terraform", "JUnit", "Sonar"],
        description:
            "Designed and implemented a Kafka-based event-driven architecture enabling real-time communication between on-premise and cloud-based applications. Led discussions on scalability, resiliency, and maintainability, ensuring a robust and future-proof system.",
    },
    {
        title: "9-1-1 Public Safety Platform",
        company: "AT&T",
        location: "Chicago, IL",
        role: "Sr. Specialist Software Engineer",
        outcome: "99.999% uptime",
        technologies: ["Java/Spring/Maven", "Oracle SQL", "Redis", "Jenkins", "Kubernetes", "JUnit"],
        description:
            "Contributed to the development of E911 services, ensuring precise location delivery with sub-1-second response times. Helped reduce costs by $21M+ annually by developing services in-house and integrating key public safety protocols.",
    },
    {
        title: "Bolt (Financial Operations)",
        company: "AT&T",
        location: "Chicago, IL",
        role: "Associate Specialist Software Engineer",
        outcome: "90%+ test coverage",
        technologies: ["Java/Spring/Maven", "AngularJS", "HTML/CSS", "Oracle SQL", "Jenkins", "Sonar", "JUnit"],
        description:
            "Enhanced a financial tracking tool managing PTO, time entry, and billing by implementing backend optimizations and front-end enhancements. Streamlined CI/CD deployments.",
    },
];
