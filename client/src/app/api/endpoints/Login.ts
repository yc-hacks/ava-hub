import { RequestType } from '../../utils/Host';
import { LOCAL_HOST } from '../host';
import { LoginRequest } from '../types/Requests';
import { LoginResponse } from '../types/Responses';

export const LOGIN_RESOURCE = 'login';
export default (request: LoginRequest) =>
    LOCAL_HOST.fire(LOGIN_RESOURCE, RequestType.POST, request, true) as Promise<LoginResponse>;
