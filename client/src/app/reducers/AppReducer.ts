// The "Global" pager
import * as types from '../constants/ReduxActions';

export type InitialStateType = {
    homeSearch: string;
};

export const InitialState: InitialStateType = {
    homeSearch: '',
};

const AppReducer = (state = InitialState, action: any) => {
    const { type } = action;

    switch (type) {
        case types.UPDATE_HOME_SEARCH_BOX:
            return {
                ...state,
                homeSearch: action.query,
            };

        default:
            // Default, no state change
            return state;
    }
};

export default AppReducer;
