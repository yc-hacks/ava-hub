// The "Global" pager
import { PodcastListing, TOP_PODCASTS } from '../constants/Data';
import * as types from '../constants/ReduxActions';

export type InitialStateType = {
    topPodcasts: PodcastListing[];
};
export const InitialState: InitialStateType = {
    topPodcasts: TOP_PODCASTS,
};

const ProfileReducer = (state = InitialState, action: any) => {
    const { type } = action;

    switch (type) {
        case types.TOGGLE_SELECT_PODCAST:
            return {
                ...state,
                topPodcasts: state.topPodcasts.map((podcast) => {
                    if (action.selected.id == podcast.id) {
                        return {
                            ...podcast,
                            selected: !podcast.selected,
                        };
                    } else {
                        return podcast;
                    }
                }),
            };

        default:
            // Default, no state change
            return state;
    }
};

export default ProfileReducer;
