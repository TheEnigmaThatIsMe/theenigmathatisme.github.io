export type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string;
    updated_at: string;
    languages_url: string;
};

export type Language = {
    [key: string]: number;
}

export type ApiError = {
    message: string;
}