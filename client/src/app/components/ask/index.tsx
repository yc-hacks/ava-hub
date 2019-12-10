import queryString from 'query-string';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Button, Header, Message } from 'semantic-ui-react';
import { askQuestion, setQuestionValue } from '../../actions';
import { InitialStateType as AskReducerType } from '../../reducers/AskReducer';
import Answer from './answer';
import Podcast from './podcast';
import './styles.scss';

export type PublicProps = {};

export type ReduxProps = {
    ask: AskReducerType;
    setQuestionValue: (query: string) => void;
    askQuestion: (query: string) => void;
};

type State = {};

export type Props = PublicProps & ReduxProps & RouteComponentProps;

class AskPage extends React.Component<Props, State> {
    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        this.props.setQuestionValue(values.question);
        this.props.askQuestion(values.question);
    }

    newQuestion = () => {
        this.props.history.push('/');
    };

    render() {
        const {
            ask: {
                searchRequest: { isLoading, didError },
                query,
                shortAnswer,
                longAnswer,
                podcast,
                episode,
            },
        } = this.props;
        const loadingNodes = (
            <div className="ask-loading">
                <img
                    src="https://i.pinimg.com/originals/78/e8/26/78e826ca1b9351214dfdd5e47f7e2024.gif"
                    width="100%"
                />
                <p>Thinking...</p>
            </div>
        );
        return (
            <div className="page-content-normal">
                <Message warning style={{ marginTop: 24 }}>
                    <Message.Header>
                        Disclaimer: These results are experimental and depend on a limited number of
                        podcasts that our model trained on during the YC Hackathon.
                    </Message.Header>
                    <p>
                        Due to the limited subset of training podcasts, Ask Ava doesn’t have
                        relevant answers for every question. Try &#34;What is Metaphysics?&#34;
                    </p>
                </Message>
                <div className="ask-query">
                    <Header as="h1">{query}</Header>
                </div>
                {isLoading ? (
                    loadingNodes
                ) : didError ? (
                    <Message negative>
                        <Message.Header>
                            We&#39;re sorry, we couldn&#39;t get an answer for you this time.
                        </Message.Header>
                        <p>
                            Our server has likely been shut off. We&#39;ll be back up and running as
                            soon as possible.
                        </p>
                    </Message>
                ) : (
                    <div className="ask-answer-container">
                        <Answer
                            podcast={podcast}
                            episode={episode}
                            shortAnswer={shortAnswer}
                            longAnswer={longAnswer}
                        />
                        <Podcast podcast={podcast} episode={episode} />
                        {podcast != undefined ? (
                            <div className="ask-actions">
                                <Button
                                    className="ask-new-question"
                                    primary
                                    onClick={this.newQuestion}
                                >
                                    New Question
                                </Button>
                                <Button
                                    className="ask-new-question"
                                    secondary
                                    onClick={this.newQuestion}
                                >
                                    Ask {podcast.author} Another Question
                                </Button>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                )}
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        ask: state.ask,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {
        setQuestionValue: (query: string) => dispatch(setQuestionValue(query)),
        askQuestion: (query: string) => dispatch(askQuestion(query)),
    };
}

const AskPageWithRouter = withRouter(AskPage);

export default (connect(
    mapStateToProps,
    mapDispatchToProps,
)(AskPageWithRouter) as any) as React.ComponentClass<PublicProps>;
