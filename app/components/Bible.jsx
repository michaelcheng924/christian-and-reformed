import React, { Component } from 'react';

class Bible extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videoHeight: 0
        };

        this.resizeVideo = this.resizeVideo.bind(this);
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            document.body.style.background = '#FFD600';
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
        return (
            <div className="salvation bible">
                <div className="salvation__truth">
                    <div className="salvation__truth-heading">
                        <h2>Evidence/Proof #1: Knowledge itself is impossible without assuming or stealing from the Christian worldview (the Bible)</h2>
                    </div>

                    <div className="salvation__truth-body">
                        <div className="salvation__scriptures">
                            <div className="salvation__scriptures-meaning">
                                <h3>Video overview</h3>
                                <p>
                                    Greg Bahnsen explains presuppositional apologetics, or the argument that one must presuppose the Christian worldview before logic or knowledge can even begin.
                                </p>
                            </div>
                        </div>
                        <div>
                            <iframe src="https://player.vimeo.com/video/221189335" width="100%" height={this.state.videoHeight} frameBorder="0" allowFullScreen ref={video => this.video = video}></iframe>
                        </div>
                    </div>
                </div>
                <div className="salvation__truth">
                    <div className="salvation__truth-heading">
                        <h2>Evidence/Proof #2: There is overwhelming evidence that Jesus' resurrection actually happened in history</h2>
                    </div>
                    <div className="salvation__truth-body">
                        <div className="salvation__scriptures">
                            <div className="salvation__scriptures-meaning">
                                <h3>Video overview</h3>
                                <p>
                                    William Lane Craig gives evidence for Jesus' resurrection.
                                </p>
                                <p>
                                    <em>Note: Craig's theology is not reformed, but his presentation on this topic is excellent.</em>
                                </p>
                            </div>
                        </div>
                        <div>
                            <iframe src="https://player.vimeo.com/video/221190360" width="100%" height={this.state.videoHeight} frameBorder="0" allowFullScreen ref={video => this.video = video}></iframe>
                        </div>
                    </div>
                </div>
                <div className="salvation__truth">
                    <div className="salvation__truth-heading">
                        <h2>Evidence/Proof #3: The Bible can be trusted to be reliable</h2>
                    </div>
                    <div className="salvation__truth-body">
                        <div className="salvation__scriptures">
                            <div className="salvation__scriptures-meaning">
                                <h3>Video overview</h3>
                                <p>
                                    Sean McDowell goes through three tests that demonstrate the Bible's reliability.
                                </p>
                            </div>
                        </div>
                        <div>
                            <iframe src="https://player.vimeo.com/video/221192717" width="100%" height={this.state.videoHeight} frameBorder="0" allowFullScreen ref={video => this.video = video}></iframe>
                        </div>
                    </div>
                </div>
                <div className="salvation__truth">
                    <div className="salvation__truth-heading">
                        <h2>Truth #4: Archaeological discoveries prove the Bible is historically accurate.</h2>
                    </div>
                    <div className="salvation__truth-body">
                        <div className="salvation__scriptures">
                            <div className="salvation__scriptures-meaning">
                                <h3>Video overview</h3>
                                <p>
                                    This presenter provides a list of archaeological discoveries that confirm the Bible's history.
                                </p>
                            </div>
                        </div>
                        <div>
                            <iframe src="https://player.vimeo.com/video/221191902" width="100%" height={this.state.videoHeight} frameBorder="0" allowFullScreen ref={video => this.video = video}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bible;
