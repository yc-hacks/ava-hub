import * as React from 'react';
import { Header, Image } from 'semantic-ui-react';
import theaterJS from 'theaterjs';
import './styles.scss';

export type PublicProps = {};

type State = {};

export type Props = PublicProps;

class About extends React.Component<Props, State> {
    componentDidMount() {
        var theater = theaterJS();

        theater
            .on('type:start, erase:start', function() {
                // add a class to actor's dom element when he starts typing/erasing
                var actor = theater.getCurrentActor();
                actor.$element.classList.add('is-typing');
            })
            .on('type:end, erase:end', function() {
                // and then remove it when he's done
                var actor = theater.getCurrentActor();
                actor.$element.classList.remove('is-typing');
            });

        theater
            .addActor('ava', { accuracy: 0.9, speed: 1.1 })
            .addActor('malcom', { accuracy: 0.8, speed: 1.1 });

        theater
            .addScene('ava:Hello there! My name is Ava.', 1500)
            .addScene(
                "ava:I'm here to connect you with all your favorite podcasters so you can ask them anything you want!",
                500,
                ' Let me show you.',
                900,
            )
            .addScene('ava:Malcom Gladwell! ', 300, 'You there?', 500)
            .addScene("malcom: Yup! What's up?", 200)
            .addScene("ava:What's the obscure virus club?", 1500)
            .addScene('malcom:The biggest band of iconoclasts', 200, '.', 200, '.', 200, '. ')
            .addScene(
                "malcom:Throughout the 1960s, a biologist named Howard Temin became convinced that something wasn’t right in science’s understanding of viruses. His colleagues dismissed him as a heretic. He turned out to be right — and you're alive today as a result. ",
                4000,
            )
            .addScene('ava:Wow thanks, Malcom!', 1500)
            .addScene('malcom: Anytime.', 200)
            .addScene('ava:Try it out for yourself on the homepage!', 1500)
            .addScene(theater.replay);
    }

    render() {
        return (
            <div className="page-content-normal">
                <Header as="h1" color="blue" textAlign="center">
                    <Image src={require('../../../assets/logo.png')} /> About
                </Header>
                <div className="about-actors">
                    <div id="ava" className="about-actors-a"></div>
                    <div id="malcom" className="about-actors-b"></div>
                </div>
            </div>
        );
    }
}

export default About;
