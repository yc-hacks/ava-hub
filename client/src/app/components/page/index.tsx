import * as React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import { InitialStateType as AppPropTypes } from '../../reducers/AppReducer';
import About from '../about';
import Home from '../home';
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
                    <Route path="/about" render={() => <About />} />
                    <Route path="/" render={() => <Home />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(AppPageComponent) as React.ComponentClass<PublicProps>;
