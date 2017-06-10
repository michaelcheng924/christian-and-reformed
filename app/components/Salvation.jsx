import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videoHeight: 0
        };

        this.resizeVideo = this.resizeVideo.bind(this);
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            document.body.style.background = '#B71C1C';
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
            <div className="salvation">
                <div className="salvation__truth">
                    <div className="salvation__truth-heading">
                        <h2>Truth #1: Most people who say they are Christians are not actually saved.</h2>
                    </div>

                    <div className="salvation__truth-body">
                        <div className="salvation__scriptures">
                            <h3>What the Bible says</h3>
                            <p>
                                <u><strong>Matthew 7:13-14</strong></u>
                                <br />
                                "Enter by the narrow gate. For the gate is wide and the way is easy that leads to destruction, and those who enter by it are many. For the gate is narrow and the way is hard that leads to life, and those who find it are few."
                            </p>
                            <p>
                                <u><strong>Matthew 7:21-23</strong></u>
                                <br />
                                "Not everyone who says to me, 'Lord, Lord,' will enter the kingdom of heaven, but the one who does the will of my Father who is in heaven. On that day many will say to me, 'Lord, Lord, did we not prophesy in your name, and cast out demons in your name, and do many mighty works in your name?' And then will I declare to them, 'I never knew you; depart from me, you workers of lawlessness.'"
                            </p>

                            <div className="salvation__scriptures-meaning">
                                <h3>What this means</h3>
                                <p>
                                    Even among those who call themselves Christians, "few" will be saved. Only those who live lives of obedience to Jesus will be saved.
                                </p>
                            </div>
                        </div>
                        <div>
                            <iframe src="https://player.vimeo.com/video/221101823" width="100%" height={this.state.videoHeight} frameBorder="0" allowFullScreen ref={video => this.video = video}></iframe>
                        </div>
                    </div>
                </div>
                <div className="salvation__truth">
                    <div className="salvation__truth-heading">
                        <h2>Truth #2: True salvation always includes a new desire to love and obey God</h2>
                    </div>
                    <div className="salvation__truth-body">
                        <div className="salvation__scriptures">
                            <h3>What the Bible clearly teaches</h3>
                            <p>
                                <u><strong>Matthew 13:44</strong></u>
                                <br />
                                "The kingdom of heaven is like treasure hidden in a field, which a man found and covered up. Then in his joy he goes and sells all that he has and buys that field."
                            </p>
                            <p>
                                <u><strong>1 Thessalonians 1:9b</strong></u>
                                <br />
                                "...how you turned to God from idols to serve the living and true God."
                            </p>

                            <div className="salvation__scriptures-meaning">
                                <h3>What this means</h3>
                                <p>
                                    If you are saved, you will love and obey God. If you do not love and obey God, then you are not truly saved. Backsliding may happen, but it will not ultimately persist.
                                </p>
                            </div>
                        </div>
                        <div>
                            <iframe src="https://player.vimeo.com/video/221105235" width="100%" height={this.state.videoHeight} frameBorder="0" allowFullScreen ref={video => this.video = video}></iframe>
                        </div>
                    </div>
                </div>
                <div className="salvation__truth">
                    <div className="salvation__truth-heading">
                        <h2>Truth #3: True Christians will believe in and obey God until the day they die.</h2>
                    </div>
                    <div className="salvation__truth-body">
                        <div className="salvation__scriptures">
                            <h3>What the Bible clearly teaches</h3>
                            <p>
                                <u><strong>Philippians 1:6</strong></u>
                                <br />
                                "And I am sure of this, that he who began a good work in you will bring it to completion at the day of Jesus Christ."
                            </p>
                            <p>
                                <u><strong>John 6:37-40</strong></u>
                                <br />
                                "All that the Father gives me will come to me, and whoever comes to me I will never cast out. For I have come down from heaven, not to do my own will but the will of him who sent me. And this is the will of him who sent me, that I should lose nothing of all that he has given me, but raise it up on the last day. For this is the will of my Father, that everyone who looks on the Son and believes in him should have eternal life, and I will raise him up on the last day."
                            </p>

                            <div className="salvation__scriptures-meaning">
                                <h3>What this means</h3>
                                <p>
                                    Christians can have confidence that God will preserve their faith until the day they die. Those who lose their faith and never come back were never truly saved.
                                </p>
                            </div>
                        </div>
                        <div>
                            <iframe src="https://player.vimeo.com/video/221106087" width="100%" height={this.state.videoHeight} frameBorder="0" allowFullScreen ref={video => this.video = video}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
