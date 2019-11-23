import * as React from 'react';

export type PublicProps = {
    title: string;
    shortAnswer: string;
    longAnswer: string;
};

export type Props = PublicProps;

type State = {};

class Answer extends React.Component<Props, State> {
    render() {
        const { title, shortAnswer, longAnswer } = this.props;
        return (
            <div className="ask-answer">
                {title && title.length != 0 ? title : ''}
                <p className="ask-answer-short">{shortAnswer}</p>
                <p className="ask-answer-quote">{longAnswer}</p>
            </div>
        );
    }
}

export default Answer as React.ComponentClass<PublicProps>;
