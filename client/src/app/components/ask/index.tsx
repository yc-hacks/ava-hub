import queryString from 'query-string';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Button, Header } from 'semantic-ui-react';
import { askQuestion, setQuestionValue } from '../../actions';
import { InitialStateType as AskReducerType } from '../../reducers/AskReducer';
import Answer from './answer';
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
                searchRequest: { isLoading, didError, error },
                query,
                shortAnswer,
                longAnswer,
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
                <div className="ask-query">
                    <Header as="h1">{query}</Header>
                </div>
                {isLoading ? (
                    loadingNodes
                ) : didError ? (
                    <p>{error}</p>
                ) : (
                    <div className="ask-answer-container">
                        <Answer
                            title={'Something'}
                            shortAnswer={shortAnswer}
                            longAnswer={longAnswer}
                        />
                        <Button className="ask-new-question" primary onClick={this.newQuestion}>
                            New Question
                        </Button>
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
