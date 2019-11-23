import { RequestType } from '../../utils/Host';
import { LOCAL_HOST } from '../host';
import { CurrentUserResponse } from '../types/Responses';

export const CURRENT_USER = 'users/current';
export default (request: {}) =>
    LOCAL_HOST.fire(CURRENT_USER, RequestType.GET, request, true) as Promise<CurrentUserResponse>;
