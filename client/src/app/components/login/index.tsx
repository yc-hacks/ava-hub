import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    InputOnChangeData,
    Message,
    Segment,
} from 'semantic-ui-react';
import { login } from '../../actions/login';
import { InitialStateType as HomeReducerState } from '../../reducers/AppReducer';

export type PublicProps = {};

export type ReduxProps = {
    home: HomeReducerState;
    login: (username: string, password: string) => void;
};

type State = {
    form: {
        username: string;
        password: string;
    };
};

export type Props = PublicProps & ReduxProps & RouteComponentProps;

class LoginPage extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                username: '',
                password: '',
            },
        };
    }

    updateInput = (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
        const val = this.state.form;
        val[event.target.id] = data.value;
        this.setState({ form: val });
    };

    onSubmit = (event, data) => {
        const { login } = this.props;
        login(this.state.form.username, this.state.form.password);
    };

    render() {
        return (
            <Grid textAlign="center" style={{ height: '80vh' }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" color="blue" textAlign="center">
                        <Image src={require('../../../assets/logo.png')} /> Log-in to your account
                    </Header>
                    <Form size="large" onSubmit={this.onSubmit}>
                        <Segment stacked>
                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                id="username"
                                placeholder="Username"
                                onChange={this.updateInput}
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                id="password"
                                type="password"
                                onChange={this.updateInput}
                            />

                            <Button color="blue" fluid size="large" onClick={this.onSubmit}>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href="#">Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
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
        login: (username: string, password: string) => dispatch(login(username, password)),
    };
}

const LoginPageWithRouter = withRouter(LoginPage);

export default (connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginPageWithRouter) as any) as React.ComponentClass<PublicProps>;
