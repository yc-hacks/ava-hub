import { PodcastListing } from '../constants/Data';
import * as Actions from '../constants/ReduxActions';

export const toggleSelectPodcast = (podcast: PodcastListing) => {
    return {
        type: Actions.TOGGLE_SELECT_PODCAST,
        selected: podcast,
    };
};
