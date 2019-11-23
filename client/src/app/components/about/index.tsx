import * as React from 'react';
import { Header, Image } from 'semantic-ui-react';

export type PublicProps = {};

type State = {};

export type Props = PublicProps;

class About extends React.Component<Props, State> {
    render() {
        return (
            <div className="page-content-normal">
                <Header as="h1" color="blue" textAlign="center">
                    <Image src={require('../../../assets/logo.png')} /> About
                </Header>
            </div>
        );
    }
}

export default About;
