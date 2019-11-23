import * as React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import { InitialStateType as AppPropTypes } from '../../reducers/AppReducer';
import About from '../about';
import Ask from '../ask';
import Home from '../home';
import Login from '../login';
import './styles.scss';

export type PublicProps = {
    app: AppPropTypes;
};

type State = {};

export type Props = PublicProps & RouteComponentProps;

class AppPageComponent extends React.Component<Props, State> {
    render() {
        return (
            <div className="page-content">
                <Switch>
                    <Route path="/ask" render={() => <Ask />} />
                    <Route path="/about" render={() => <About />} />
                    <Route path="/login" render={() => <Login />} />
                    <Route path="/" render={() => <Home />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(AppPageComponent) as React.ComponentClass<PublicProps>;
