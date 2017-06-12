import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { partial } from 'lodash';

import { setApp } from 'app/actions/AppActions';

class Predestination extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videoHeight: 0
        };

        this.resizeVideo = this.resizeVideo.bind(this);
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            document.body.style.background = '#0277BD';
        }

        if (typeof window !== undefined) {
            window.addEventListener('resize', this.resizeVideo);
        }

        this.resizeVideo();
    }

    componentWillUnmount() {
        if (typeof window !== undefined) {
            window.removeEventListener('scroll', this.resizeVideo);
        }
    }

    resizeVideo() {
        this.setState({ videoHeight: this.video.offsetWidth * .75 });
    }

    render() {
        const { onSetApp } = this.props;

        return (
            <div className="salvation predestination">
                <div className="salvation__other-pages">
                    <p>Not convinced that the Bible is true? Check out the <Link to="/bible" onClick={partial(onSetApp, '/bible')}>Proof/Evidence for the Bible</Link> page.</p>
                    <p>
                        Learn more about the Bible:<br />
                        <Link to="/salvation" onClick={partial(onSetApp, '/salvation')}>3 truths about salvation</Link>
                    </p>
                </div>

                <div className="salvation__truth">
                    <div className="salvation__truth-heading">
                        <h2>Amazing Grace Series, Part 1: The history of the debate</h2>
                    </div>

                    <div className="salvation__truth-body">
                        <div className="salvation__scriptures">
                            <div className="salvation__scriptures-meaning">
                                <h3>Video overview</h3>
                                <p>
                                    Part One explores the history of the debate. It begins with the pivotal dispute between Augustine and Pelagius and continues through the semi-pelagian controversy; focusing particularly on the debate between Martin Luther and Desiderius Erasmus. Many viewers will be shocked to discover that free-will theology was NOT the doctrine of the Reformation but instead the teaching of an increasingly apostate Roman Catholic Church. The history section ends with a definitive historical explanation of the issues that arose during the Calvinist/Arminian controversy. By examining the five points of Arminianism and the Synod of Dort’s response, the viewer will clearly see that the Protestant Church understood how the Gospel would be compromised if Arminianism prevailed.
                                </p>
                            </div>
                        </div>
                        <div>
                            <iframe src="https://player.vimeo.com/video/221207161" width="100%" height={this.state.videoHeight} frameBorder="0" allowFullScreen ref={video => this.video = video}></iframe>
                        </div>
                    </div>
                </div>
                <div className="salvation__truth">
                    <div className="salvation__truth-heading">
                        <h2>Amazing Grace Series, Part 2: Scriptural evidence for the five points of Calvinism</h2>
                    </div>
                    <div className="salvation__truth-body">
                        <div className="salvation__scriptures">
                            <div className="salvation__scriptures-meaning">
                                <h3>Video overview</h3>
                                <p>
                                    Part Two opens the Word of God, our ultimate authority for life and faith. The five points of Arminianism are put on trial as what would later come to be known as the “five points of Calvinism” are clearly and forcefully presented.
                                </p>
                            </div>
                        </div>
                        <div>
                            <iframe src="https://player.vimeo.com/video/221210049" width="100%" height={this.state.videoHeight} frameBorder="0" allowFullScreen ref={video => this.video = video}></iframe>
                        </div>
                    </div>
                </div>
                <div className="salvation__truth">
                    <div className="salvation__truth-heading">
                        <h2>Amazing Grace Series, Part 3: If Calvinism is true, then why evangelize?</h2>
                    </div>
                    <div className="salvation__truth-body">
                        <div className="salvation__scriptures">
                            <div className="salvation__scriptures-meaning">
                                <h3>Video overview</h3>
                                <p>
                                    Part Three asks and answers the provocative question: If Calvinism is true, if God is absolutely sovereign; then why should we evangelize? It also explores the vital issue of how to and to whom the gospel should be presented so as to be faithful to the great doctrines of God’s sovereignty, man’s depravity, and the miracle of amazing grace.
                                </p>
                            </div>
                        </div>
                        <div>
                            <iframe src="https://player.vimeo.com/video/221275414" width="100%" height={this.state.videoHeight} frameBorder="0" allowFullScreen ref={video => this.video = video}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapActionsToProps = {
    onSetApp: setApp
};

export default connect(null,  mapActionsToProps)(Predestination);
