import ExampleRequest from '../api/endpoints/ExampleRequest';
import { ExampleRequest as ExampleRequestType } from '../api/types/Requests';
import * as Actions from '../constants/ReduxActions';

export const uppdateHomeSearchBox = (query: string) => ({
    type: Actions.UPDATE_HOME_SEARCH_BOX,
    query,
});

export const exampleRequestAction = (id: string) => {
    const request: ExampleRequestType = {
        id,
    };
    return {
        type: Actions.TEST_ACTION,
        promise: ExampleRequest(request),
    };
};
