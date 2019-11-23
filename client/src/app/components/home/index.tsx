import { Box } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Form, FormProps, Input } from 'semantic-ui-react';
import { updateHomeSearchBox } from '../../actions';
import { InitialStateType as HomeReducerState } from '../../reducers/AppReducer';
import './styles.scss';

export type PublicProps = {};

export type ReduxProps = {
    home: HomeReducerState;
    updateHomeSearchBox: (query: string) => void;
};

type State = {};

export type Props = PublicProps & ReduxProps & RouteComponentProps;

class HomePage extends React.Component<Props, State> {
    searchUpdated = (event) => {
        this.props.updateHomeSearchBox(event.target.value);
    };

    onSubmit = (event: React.FormEvent<HTMLFormElement>, data: FormProps) => {
        const {
            home: { homeSearch },
            history,
        } = this.props;
        history.push({
            pathname: '/ask',
            search: `?question=${encodeURI(homeSearch)}`,
        });
    };

    render() {
        return (
            <div className="home">
                <div className="home-content">
                    <Box
                        textAlign="center"
                        fontSize={60}
                        color="#2DB84B"
                        lineHeight={1}
                        className="home-name"
                    >
                        Ava
                    </Box>
                    <Box textAlign="center" fontSize={30} color="#979797" lineHeight={3}>
                        Ask your favorite podcasters anything.
                    </Box>

                    <div className="home-content-form">
                        <Form size="small" onSubmit={this.onSubmit}>
                            <Form.Field>
                                <Input
                                    action="Ask"
                                    placeholder="What is metaphysics?"
                                    onChange={this.searchUpdated}
                                />
                            </Form.Field>
                        </Form>
                    </div>
                </div>

                <div className="home-background">
                    <img
                        className="home-background-img"
                        src={require('../../../assets/background.png')}
                    />
                </div>

                <div className="home-extensions">
                    <img src={require('../../../assets/alexa.png')} />
                    <img src={require('../../../assets/google-home.png')} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        home: state.app,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {
        updateHomeSearchBox: (query: string) => dispatch(updateHomeSearchBox(query)),
    };
}

const HomePageWithRouter = withRouter(HomePage);

export default (connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePageWithRouter) as any) as React.ComponentClass<PublicProps>;
