const injectThemeVariables = (theme: any) => {
    const root = document.documentElement;

    root.style.setProperty("--primary-color", theme.primary);
    root.style.setProperty("--secondary-color", theme.secondary);
    root.style.setProperty("--accent-color", theme.accent);
    root.style.setProperty("--text-color", theme.text);
    root.style.setProperty("--background-color", theme.background);
    root.style.setProperty("--border-color", theme.border);
};

export default injectThemeVariables;
