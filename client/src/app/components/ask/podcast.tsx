import * as React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export type PublicProps = {
    episode?: {
        title: string;
        link: string;
        summary: string;
        uuid: string;
    };
    podcast?: {
        author: string;
        category: string;
        description: string;
        image: {
            href: string;
        };
        title: string;
    };
};

export type Props = PublicProps;

type State = {};

class Podcast extends React.Component<Props, State> {
    render() {
        const { podcast, episode } = this.props;

        if (podcast == undefined || episode == undefined) return <React.Fragment />;

        const {
            author,
            category,
            description,
            image: { href },
            title,
        } = podcast;
        const { title: episodeTitle, summary, link } = episode;

        return (
            <div className="ask-podcast">
                <Card style={{ margin: 'auto' }}>
                    <Image src={href} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{episodeTitle}</Card.Header>
                        <Card.Meta>
                            <span className="date">{title}</span>
                        </Card.Meta>
                        <Card.Description>{summary}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name="user" />
                        {category} —{' '}
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            Listen
                        </a>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default Podcast as React.ComponentClass<PublicProps>;
