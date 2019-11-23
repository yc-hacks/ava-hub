// The "Global" pager
import { handle } from 'redux-pack';
import { AskQuestionResponse } from '../api/types/Responses';
import * as types from '../constants/ReduxActions';

export type InitialStateType = {
    searchRequest: {
        isLoading: boolean;
        didError: boolean;
        error?: string;
    };
    query: string;
    shortAnswer: string;
    longAnswer: string;
};

export const InitialState: InitialStateType = {
    searchRequest: {
        isLoading: false,
        didError: false,
        error: '',
    },
    query: '',
    shortAnswer: '',
    longAnswer: '',
};

const AppReducer = (state = InitialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case types.ASK_QUESTION_FIRE:
            return handle(state, action, {
                start: (prevState: InitialStateType) => {
                    return {
                        ...prevState,
                        searchRequest: {
                            ...prevState.searchRequest,
                            isLoading: true,
                        },
                    };
                },
                finish: (prevState: InitialStateType) => {
                    return {
                        ...prevState,
                        searchRequest: {
                            ...prevState.searchRequest,
                            isLoading: false,
                        },
                    };
                },
                failure: (prevState: InitialStateType) => {
                    return {
                        ...prevState,
                        searchRequest: {
                            ...prevState.searchRequest,
                            didError: true,
                            error: 'Request failed',
                        },
                    };
                },
                success: (prevState: InitialStateType) => {
                    const askQuestionResponse: AskQuestionResponse = payload;
                    const { success, shortAnswer, longAnswer } = askQuestionResponse;

                    if (success) {
                        return {
                            ...prevState,
                            shortAnswer,
                            longAnswer,
                        };
                    }
                    return {
                        ...prevState,
                        searchRequest: {
                            ...prevState.searchRequest,
                            didError: true,
                            error: payload.error,
                        },
                    };
                },
            });

        default:
            // Default, no state change
            return state;
    }
};

export default AppReducer;
