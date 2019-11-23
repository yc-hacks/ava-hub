import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import { ThunkDispatch } from 'redux-thunk';
import { Card, Header, Image } from 'semantic-ui-react';
import { toggleSelectPodcast } from '../../actions/profile';
import { PodcastListing } from '../../constants/Data';
import { InitialStateType as ProfileStateType } from '../../reducers/ProfileReducer';
import PodcastCard from './podcastCard';
import './styles.scss';

export type PublicProps = {};

export type ReduxProps = {
    profile: ProfileStateType;
    toggleSelectPodcast: (podcast: PodcastListing) => void;
};

type State = {};

export type Props = PublicProps & ReduxProps & RouteComponentProps;

class Profile extends React.Component<Props, State> {
    render() {
        const {
            profile: { topPodcasts },
        } = this.props;
        const data = [
            {
                data: {
                    philosophy: 0.7,
                    design: 0.8,
                    sports: 0.9,
                    travel: 0.67,
                    news: 0.8,
                },
                meta: { color: 'blue' },
            },
        ];

        const captions = {
            // columns
            philosophy: 'Philosphy',
            design: 'Design',
            sports: 'Sports',
            travel: 'Travel',
            news: 'News',
        };
        const podcastCardNodes = topPodcasts.map((podcast) => (
            <PodcastCard
                key={podcast.id}
                podcast={podcast}
                onSelect={(podcast) => this.props.toggleSelectPodcast(podcast)}
            />
        ));
        return (
            <div className="page-content-normal">
                <Header as="h1" color="blue" textAlign="center">
                    <Image src={require('../../../assets/logo.png')} /> Personalize Your Ava
                </Header>

                <Header as="h1" color="blue" textAlign="left">
                    Select From Top Podcasters
                </Header>
                <Card.Group>{podcastCardNodes}</Card.Group>
                <RadarChart captions={captions} data={data} size={450} />
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        profile: state.profile,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {
        toggleSelectPodcast: (podcast: PodcastListing) => dispatch(toggleSelectPodcast(podcast)),
    };
}

const ProfileWithRouter = withRouter(Profile);

export default (connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileWithRouter) as any) as React.ComponentClass<PublicProps>;
