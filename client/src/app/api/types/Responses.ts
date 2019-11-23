export type AskQuestionResponse = {
    success: boolean;
    error?: string;
    episode: {
        title: string;
        link: string;
        summary: string;
        uuid: string;
    };
    podcast: {
        author: string;
        category: string;
        description: string;
        image: {
            href: string;
        };
        title: string;
    };
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
