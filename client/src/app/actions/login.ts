import CurrentUser from '../api/endpoints/CurrentUser';
import Login from '../api/endpoints/Login';
import { LoginRequest } from '../api/types/Requests';
import * as Actions from '../constants/ReduxActions';

export const login = (username: string, password: string) => {
    const request: LoginRequest = {
        username,
        password,
    };
    return {
        type: Actions.USER_LOGIN_FIRE,
        promise: Login(request),
    };
};

export const currentUser = () => {
    return {
        type: Actions.GET_CURRENT_USER,
        promise: CurrentUser({}),
    };
};
