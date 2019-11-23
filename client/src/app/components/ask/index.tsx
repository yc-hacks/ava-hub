import queryString from 'query-string';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

export type PublicProps = {};

export type ReduxProps = {};

type State = {};

export type Props = PublicProps & ReduxProps & RouteComponentProps;

class AskPage extends React.Component<Props, State> {
    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
    }

    render() {
        return <div className="page-content-normal">Hello</div>;
    }
}

function mapStateToProps(state: any) {
    return {};
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {};
}

const AskPageWithRouter = withRouter(AskPage);

export default (connect(
    mapStateToProps,
    mapDispatchToProps,
)(AskPageWithRouter) as any) as React.ComponentClass<PublicProps>;
