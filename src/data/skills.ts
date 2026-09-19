// Skills, grouped the way the resume groups them.
//
// Year counts are George's own figures, given 2026-09-19, and measure depth
// rather than elapsed time since first use. His words: Java has been his full
// career, backend generally along with it, web-based languages close behind,
// and Go is still 1 year. Full career is Jun 2017 to now, so 9. JavaScript is
// paired with TypeScript because the 9 belongs to the category -- AngularJS on
// Bolt in 2017 through React and TypeScript at N3TWORK -- not to TypeScript
// alone, which the resume only shows from Nov 2023. Python keeps his Jan 2025
// estimate of 3 carried forward by the ~20 months since. C# is the one entry
// he has not put a number on.
//
// His "Backend Development", "API Development", "Web Development" and "Full
// Stack Development" entries are gone. The hero already says all four, and the
// first two were the same claim twice.
export type SkillGroup = {
    heading: string;
    skills: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        heading: "Languages",
        skills: ["Java (9 years)", "JavaScript / TypeScript (9 years)", "Python (5 years)", "C#", "Go (1 year)"],
    },
    { heading: "Frameworks", skills: ["Spring (9 years)", "React"] },
    { heading: "Cloud and DevOps", skills: ["AWS", "Azure", "Terraform", "Kubernetes", "Docker", "Jenkins"] },
    { heading: "Databases and messaging", skills: ["PostgreSQL", "DynamoDB", "Redis", "Kafka", "Thrift"] },
];
