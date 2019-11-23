import { Box, Button } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import './styles.scss';

export type PublicProps = {};

export type ReduxProps = {};

type State = {};

export type Props = PublicProps & ReduxProps & RouteComponentProps;

class HomePage extends React.Component<Props, State> {
    render() {
        return (
            <div className="home">
                <div className="home-content">
                    <Box textAlign="center" fontSize={48} color="#2DB84B">
                        Ava
                    </Box>
                    <Box textAlign="center" fontSize={24} color="#979797">
                        Ask your favorite podcasters anything.
                    </Box>
                </div>

                <div className="home-background">
                    <img
                        className="home-background-img"
                        src={require('../../../assets/background.png')}
                    />
                </div>

                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {};
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {};
}

export default (connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage) as any) as React.ComponentClass<PublicProps>;
