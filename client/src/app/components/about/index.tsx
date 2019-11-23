import * as React from 'react';
import { Header } from 'semantic-ui-react';

export type PublicProps = {};

type State = {};

export type Props = PublicProps;

class About extends React.Component<Props, State> {
    render() {
        return (
            <div className="page-content-normal">
                <Header as="h1">About</Header>
            </div>
        );
    }
}

export default About;
