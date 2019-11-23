import * as React from 'react';
// require('typeface-roboto');
import WebFont from 'webfontloader';
import { InitialStateType as AppPropTypes } from '../../reducers/AppReducer';
import AppRouterComponent from '../page';
import NavigationBar from '../partials';

WebFont.load({
    google: {
        families: ['Roboto:300,400,500'],
    },
});

export type PublicProps = {
    app: AppPropTypes;
};

export type Props = PublicProps;

type State = {};

class DefaultLayout extends React.Component<Props, State> {
    render() {
        const { app } = this.props;
        return (
            <div>
                <NavigationBar app={app} />
                <AppRouterComponent app={app} />
            </div>
        );
    }
}

export default DefaultLayout as React.ComponentClass<PublicProps>;
