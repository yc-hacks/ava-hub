import { RequestType } from '../../utils/Host';
import { MODEL_HOST } from '../host';
import { AskQuestionRequest } from '../types/Requests';
import { AskQuestionResponse } from '../types/Responses';

export const SOME_RESOURCE = '/ask';
export default (request: AskQuestionRequest) =>
    MODEL_HOST.fire(SOME_RESOURCE, RequestType.GET, request) as Promise<AskQuestionResponse>;
