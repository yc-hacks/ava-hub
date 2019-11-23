// The "Global" pager
import { handle } from 'redux-pack';
import * as types from '../constants/ReduxActions';

export type InitialStateType = {
    homeSearch: string;
    user: {
        loggedIn: boolean;
        request: {
            isLoading: boolean;
            didError: boolean;
            error?: string;
        };
        username?: string;
        firstName?: string;
        lastName?: string;
    };
};

export const InitialState: InitialStateType = {
    homeSearch: '',
    user: {
        loggedIn: false,
        request: {
            isLoading: false,
            didError: false,
            error: '',
        },
    },
};

const AppReducer = (state = InitialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case types.UPDATE_HOME_SEARCH_BOX:
            return {
                ...state,
                homeSearch: action.query,
            };

        case types.USER_LOGIN_FIRE:
            return handle(state, action, {
                start: (prevState: InitialStateType) => {
                    return {
                        ...prevState,
                        user: {
                            ...prevState.user,
                            request: {
                                ...prevState.user.request,
                                isLoading: true,
                                didError: false,
                            },
                        },
                    };
                },
                finish: (prevState: InitialStateType) => {
                    return {
                        ...prevState,
                        user: {
                            ...prevState.user,
                            request: {
                                ...prevState.user.request,
                                isLoading: false,
                            },
                        },
                    };
                },
                failure: (prevState: InitialStateType) => {
                    return {
                        ...prevState,
                        user: {
                            ...prevState.user,
                            request: {
                                ...prevState.user.request,
                                didError: true,
                                error: 'Request failed',
                            },
                        },
                    };
                },
                success: (prevState: InitialStateType) => {
                    const { success } = payload;

                    if (success) {
                        window.location.href = '/';
                        return {
                            ...prevState,
                            user: {
                                ...prevState.user,
                                loggedIn: true,
                                username: payload.username,
                                firstName: payload.firstName,
                                lastName: payload.lsatName,
                            },
                        };
                    }
                    return {
                        ...prevState,
                        user: {
                            ...prevState.user,
                            loggedIn: false,
                            request: {
                                ...prevState.user.request,
                                didError: true,
                                error: payload.error,
                            },
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
