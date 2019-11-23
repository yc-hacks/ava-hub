export type AskQuestionResponse = {
    success: boolean;
    error?: string;
    title: string;
    shortAnswer: string;
    longAnswer: string;
};

export type LoginResponse = {
    success: boolean;
    error?: string;
    user?: {
        username: string;
        firstName: string;
        lastName: string;
        createdAt: string;
        updatedAt: string;
    };
};

export type CurrentUserResponse = {
    logged_in: boolean;
    user?: {
        username: string;
        firstName: string;
        lastName: string;
        createdAt: string;
        updatedAt: string;
    };
};
