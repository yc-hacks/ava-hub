import { Box, Button, TextField } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { uppdateHomeSearchBox } from '../../actions';
import './styles.scss';

export type PublicProps = {
    updateHomeSearchBox: (query: string) => void;
};

export type ReduxProps = {};

type State = {};

export type Props = PublicProps & ReduxProps & RouteComponentProps;

class HomePage extends React.Component<Props, State> {
    searchUpdated = (event) => {
        this.props.updateHomeSearchBox(event.target.value);
    };

    render() {
        return (
            <div className="home">
                <div className="home-content">
                    <Box textAlign="center" fontSize={60} color="#2DB84B" lineHeight={1}>
                        Ava
                    </Box>
                    <Box textAlign="center" fontSize={30} color="#979797" lineHeight={3}>
                        Ask your favorite podcasters anything.
                    </Box>

                    <TextField
                        id="outlined-search"
                        label="Search field"
                        type="search"
                        margin="normal"
                        variant="outlined"
                        onChange={this.searchUpdated}
                    />
                    <br />
                    <Button variant="contained" color="primary">
                        Ask
                    </Button>
                </div>

                <div className="home-background">
                    <img
                        className="home-background-img"
                        src={require('../../../assets/background.png')}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {};
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {
        updateHomeSearchBox: (query: string) => dispatch(uppdateHomeSearchBox(query)),
    };
}

export default (connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage) as any) as React.ComponentClass<PublicProps>;
