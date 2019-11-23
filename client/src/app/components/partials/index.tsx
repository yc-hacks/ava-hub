import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { InitialStateType as AppPropTypes } from '../../reducers/AppReducer';
import './styles.scss';

export type PublicProps = {
    app: AppPropTypes;
};

export type Props = PublicProps & RouteComponentProps;

function NavigationBar({ app, location: routeLocation }: Props) {
    return (
        <div className="headerMenu">
            <Link to="/">Ask</Link>
            <a
                href="https://devpost.com/software/ava-69yuo1"
                target="_blank"
                rel="noopener noreferrer"
            >
                Devpost
            </a>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
        </div>
    );
}

export default withRouter(NavigationBar) as React.ComponentType<PublicProps>;
