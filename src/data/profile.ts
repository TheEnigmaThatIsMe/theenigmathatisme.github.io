// Single source of truth for the identity and contact details used by the header,
// hero, and footer. The email and resume are already public on the resume PDF.
export const profile = {
    name: "George Gilmartin",
    title: "Senior Software Engineer",
    lead: "Backend and full-stack engineer working in Java, Spring, Go, and TypeScript, mostly on event-driven systems and the APIs in front of them.",
    email: "ggilmartin1123@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/ggilmartin",
    gitHubUrl: "https://github.com/TheEnigmaThatIsMe",
    // Served from public/; opens in a new tab, matching the header link.
    resumeUrl: `${import.meta.env.BASE_URL}Gilmartin_Resume.pdf`,
} as const;
