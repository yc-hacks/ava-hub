import * as React from 'react';

export type PublicProps = {
    shortAnswer: string;
    longAnswer: string;
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

class Answer extends React.Component<Props, State> {
    render() {
        const { podcast, shortAnswer, longAnswer } = this.props;
        return (
            <div className="ask-answer">
                {podcast != undefined ? `${podcast.author} says:` : ''}
                <p className="ask-answer-short">{shortAnswer}</p>
                <i className="ask-answer-quote">{longAnswer}</i>
            </div>
        );
    }
}

export default Answer as React.ComponentClass<PublicProps>;
