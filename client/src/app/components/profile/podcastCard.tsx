import * as React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { PodcastListing } from '../../constants/Data';

export type PublicProps = {
    podcast: PodcastListing;
    onSelect: (podcast: PodcastListing) => void;
};

export type Props = PublicProps;

type State = {};

class PodcastCard extends React.Component<Props, State> {
    render() {
        const { podcast } = this.props;
        return (
            <Card onClick={() => this.props.onSelect(this.props.podcast)}>
                {podcast.selected ? (
                    <Image
                        src={require('../../../assets/checkbox.png')}
                        wrapped
                        ui={false}
                        className="podcast-card-image-selected"
                    />
                ) : (
                    <React.Fragment />
                )}
                <Image src={podcast.image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{podcast.name}</Card.Header>
                    <Card.Meta>Meta</Card.Meta>
                    <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
                </Card.Content>
            </Card>
        );
    }
}
export default PodcastCard as React.ComponentClass<PublicProps>;
