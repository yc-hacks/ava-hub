import AskQuestion from '../api/endpoints/AskQuestion';
import { AskQuestionRequest as AskQuestionRequestType } from '../api/types/Requests';
import * as Actions from '../constants/ReduxActions';

export const updateHomeSearchBox = (query: string) => ({
    type: Actions.UPDATE_HOME_SEARCH_BOX,
    query,
});

export const askQuestion = (question: string) => {
    const request: AskQuestionRequestType = {
        question,
    };
    return {
        type: Actions.ASK_QUESTION_FIRE,
        promise: AskQuestion(request),
    };
};
