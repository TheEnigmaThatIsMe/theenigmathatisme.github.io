import React, {useEffect, useState} from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {ApiError, Language, Repo} from "../types/types.ts";

type PortfolioItemProps = {
    repo: Repo;
};

export const PortfolioItem: React.FC<PortfolioItemProps> = ({repo}: PortfolioItemProps) => {
    const [languageError, setLanguageError] = useState<string | null>(null);
    const [languages, setLanguages] = useState<{ [key: string]: Language }>({});

    useEffect(() => {
        const fetchLanguages = async (repoName: string) => {
            try {
                const response = await fetch(`https://api.github.com/repos/TheEnigmaThatIsMe/${repoName}/languages`);
                if (response.status === 200) {
                    const data: Language = await response.json();
                    setLanguages(prevLanguages => ({...prevLanguages, [repoName]: data}));
                } else {
                    const data: ApiError = await response.json();
                    setLanguageError(data.message);
                }
            } catch (err) {
                setLanguageError((err as Error).message);
                console.log(languageError);
            }
        };
        fetchLanguages(repo.name);
    }, [repo]);

    return (
        <Card variant={"outlined"} sx={{height: "100%", backgroundColor: "#fafafa"}}>
            <CardContent>
                <Typography variant="h6" sx={{fontFamily: "Bebas Neue"}}>
                    {repo.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{fontFamily: "Montserrat Variable"}}>
                    {repo.description || ""}
                </Typography>
                <Typography variant={"body2"} color="textSecondary" sx={{fontFamily: "Montserrat Variable"}}>
                    Technologies: {languages[repo.name] ? Object.keys(languages[repo.name]).join(", ") : languageError}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub
                </Button>
                {(repo.name.toLowerCase() === "TerraQuake".toLowerCase()) ? (
                    // This can be updated to include more projects later
                    <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        href={`https://theenigmathatisme.github.io/${repo.name}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Live
                    </Button>
                ) : <></>
                }
            </CardActions>
        </Card>
    );
}