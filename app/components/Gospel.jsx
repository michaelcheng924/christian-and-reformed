import React, { Component } from 'react';
import css from 'classnames'

class Gospel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gospelIsFront: true
        };

        this.flipGospel = this.flipGospel.bind(this);
    }

    componentDidMount() {
        this.gospelInterval = setInterval(this.flipGospel, 2500);
    }

    flipGospel() {
        this.setState({ gospelIsFront: !this.state.gospelIsFront });
    }

    render() {
        const gospelClassNames = css('flip-container flip-container--gospel', {
            hover: !this.state.gospelIsFront
        });

        return (
            <div className="gospel">
                <div className="gospel__shortcuts">
                    <a className="gospel__shortcut" href="#sin">
                        <div style={{ background: '#D50000', padding: '5px 10px' }}>
                            <span className="gospel__shortcut-number">1</span>SIN
                        </div>
                    </a>
                    <a className="gospel__shortcut" href="#hell">
                        <div style={{ background: '#424242', padding: '5px 10px' }}>
                            <span className="gospel__shortcut-number">2</span>HELL
                        </div>
                    </a>
                    <a className="gospel__shortcut" href="#jesus">
                        <div style={{ background: '#039BE5', padding: '5px 10px' }}>
                            <span className="gospel__shortcut-number">3</span>JESUS
                        </div>
                    </a>
                    <a className="gospel__shortcut" href="#salvation">
                        <div style={{ background: '#4CAF50', padding: '5px 10px' }}>
                            <span className="gospel__shortcut-number">4</span>SALVATION
                        </div>
                    </a>
                    <a className="gospel__shortcut" href="#next">
                        <div style={{ background: '#009688', padding: '5px 10px' }}>
                            <span className="gospel__shortcut-number">5</span>NEXT STEPS
                        </div>
                    </a>
                </div>
                <div className="gospel__title">
                    <div className="fa fa-question-circle-o" />
                    <div className="gospel__title-text">
                        <div className="gospel__title-section">What is the</div>
                        <div className="gospel__title-section">
                            <div className={gospelClassNames}>
                              <div className="flipper flipper-gospel">
                                <span className="front">
                                  <span>GOSPEL</span>
                                </span>
                                <span className="back">
                                  <span>GOOD NEWS</span>
                                </span>
                              </div>
                            </div>
                        </div>
                        <div className="gospel__title-section">of Jesus Christ?</div>
                    </div>
                </div>

                <div className="gospel__before-good-news">
                    Before the <strong style={{ color: '#43A047' }}>GOOD</strong> news, there is <strong style={{ color: '#F44336' }}>BAD</strong> news...
                </div>

                <div id="sin" className="gospel__guilty-of-sin">
                    <div className="gospel__guilty-of-sin-title">
                        <div className="fa fa-balance-scale" />
                        <br />
                        You are guilty of <strong>sin</strong> before God
                    </div>
                    <div className="gospel__guilty-of-sin-content">
                        <div>God is <span className="gospel__guilty-of-sin-holy">HOLY</span>, or <span className="gospel__guilty-of-sin-holy">PERFECTLY RIGHTEOUS</span>,</div>
                        <div>and commands humans to also be <span className="gospel__guilty-of-sin-holy">HOLY</span>.</div>

                        <div className="gospel__scripture">
                            "You shall be holy, for I am holy" (1 Peter 1:16)
                        </div>

                        <div>
                            <br />
                                <span className="fa fa-tint" />
                                You are not <span className="gospel__guilty-of-sin-holy">HOLY</span>, but have <span className="gospel__guilty-of-sin-sinned">SINNED</span>.
                            <br /><br />
                            <div className="gospel__guilty-of-sin-scripture">
                                "But as for
                                <div className="gospel__guilty-of-sin-list">
                                    <strong>the cowardly,</strong> <div className="gospel__guilty-of-sin-question">(Have you ever avoided doing the right thing?)</div>
                                    <strong>the faithless,</strong> <div className="gospel__guilty-of-sin-question">(Have you ever not believed in/trusted God?)</div>
                                    <strong>the detestable,</strong>
                                    <strong>as for murderers,</strong> <div className="gospel__guilty-of-sin-question">(Have you ever gotten angry at another person? (see Matthew 5:22))</div>
                                    <strong>the sexually immoral,</strong> <div className="gospel__guilty-of-sin-question">(Have you ever lusted after a woman or man?)</div>
                                    <strong>sorcerers,</strong>
                                    <strong>idolaters,</strong> <div className="gospel__guilty-of-sin-question">(Have you ever put anything in your life above God?)</div>
                                    <strong>and all liars,</strong> <div className="gospel__guilty-of-sin-question">(Have you ever lied?)</div>
                                </div>
                                their portion will be in the lake that burns with fire and sulfur, which is the second death."
                                <br /><br />
                                <em>(Revelation 21:8)</em>
                            </div>

                            <div className="gospel__guilty-of-sin-hell">
                                It is clear that every human being fails God's moral standard and therefore deserves
                                <div><strong>"the lake that burns with fire and sulfer"</strong>,</div> which is <div><strong>hell</strong>.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="hell" className="gospel__hell">
                    <div className="gospel__hell-title">
                        <div className="fa fa-fire" /><br />
                        The punishment for sin is <strong>hell</strong>.
                    </div>
                    <div className="gospel__hell-content">
                        <span className="gospel__hell-infinite">&infin;</span> Our sin deserves <strong style={{ color: '#C62828', fontSize: 33 }}>INFINITE PUNISHMENT</strong> because it is against an <strong style={{ color: '#FFD600', fontSize: 33 }}>INFINITELY HOLY</strong> God.
                        <br /><br />
                        Hell is <strong style={{ color: '#C62828', fontSize: 33, textTransform: 'uppercase' }}>eternal torment</strong>:
                        <br />
                        <div className="gospel__hell-scripture">
                            "If anyone worships the beast and its image and receives a mark on his forehead or on his hand, he also will drink the wine of God's wrath, poured full strength into the cup of his anger, and he will be <div><strong>tormented with fire and sulfur</strong></div> in the presence of the holy angels and in the presence of the Lamb. And <div><strong>the smoke of their torment goes up forever and ever, and they have no rest, day or night</strong>,</div> these worshipers of the beast and its image, and whoever receives the mark of its name."
                            <br /><br />
                            <em>(Revelation 14:9-11)</em>
                        </div>
                    </div>
                </div>

                <div className="gospel__good-news">
                    Thankfully, there is <strong style={{ color: '#43A047' }}>GOOD</strong> news...
                </div>

                <div id="jesus" className="gospel__jesus">
                    <div className="gospel__jesus-title">
                        <div className="fa fa-plus" /><br />
                        Jesus provides <strong>salvation</strong> from sin and hell
                    </div>
                    <div className="gospel__jesus-content">
                        Jesus is <strong style={{ color: '#FFD600', fontSize: 33 }}>FULLY GOD</strong> and <strong style={{ color: '#FFD600', fontSize: 33 }}>FULLY HUMAN</strong>:
                        <div className="gospel__jesus-scripture">
                            "Jesus... <strong>though he was in the form of God</strong>, did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant, being <strong>born in the likeness of men</strong>."
                            <br /><br />
                            <em>(Philippians 2:5-7)</em>
                        </div>
                        <br /><br />
                        On the cross, Jesus became a <strong style={{ color: '#F44336', fontSize: 33 }}>SUBSTITUTE SACRIFICE</strong> for sin. In other words, he <strong style={{ color: '#F44336', fontSize: 33 }}>SUFFERED HELL IN THE PLACE OF SINNERS</strong>.
                        <div className="gospel__jesus-scripture">
                            "For our sake he made him <strong>to be sin who knew no sin</strong>..."
                            <br /><br />
                            <em>(2 Corinthians 5:21a)</em>
                        </div>
                        <br /><br />
                        Jesus' perfect righteousness is <strong style={{ color: '#43A047', fontSize: 33 }}>IMPUTED</strong>, or <strong style={{ color: '#43A047', fontSize: 33 }}>CREDITED</strong> to God's people (through faith).
                        <div className="gospel__jesus-scripture">
                            "...so that in him <strong>we might become the righteousness of God</strong>."
                            <br /><br />
                            <em>(2 Corinthians 5:21b)</em>
                        </div>
                    </div>
                </div>

                <div id="salvation" className="gospel__repent-believe">
                    <div className="gospel__repent-believe-title">
                        <div className="fa fa-user" /><br />
                        What must I do to be saved?
                    </div>
                    <div className="gospel__repent-believe-content">
                        You must
                        <div><strong style={{ color: '#C62828', fontSize: 33 }}>REPENT</strong></div>
                        <strong style={{ fontSize: 20 }}>(feel genuine sorrow/hatred towards your sin and resolve to turn from it)</strong>
                        <div>and</div>
                        <div><strong style={{ color: '#1E88E5', fontSize: 33 }}>BELIEVE</strong></div>
                        <strong style={{ fontSize: 20 }}>(trust in Jesus' work <strong>alone</strong> for your salvation and not at all in your own good works)</strong>

                        <br /><br />

                        <div className="gospel__repent-believe-scripture">
                            "The time is fulfilled, and the kingdom of God is at hand; <strong>repent and believe</strong> in the gospel."
                            <br /><br />
                            <em>(Mark 1:15)</em>
                        </div>

                        <br /><br />

                        True salvation involves <strong style={{ color: '#43A047', fontSize: 33 }}>LIFELONG</strong> repentance and faith because they are the evidence of a <strong style={{ color: '#43A047', fontSize: 33 }}>REGENERATED</strong>, or <strong style={{ color: '#43A047', fontSize: 33 }}>NEW</strong>, nature from God.

                        <div className="gospel__repent-believe-scripture">
                            "Jesus answered him, 'Truly, truly, I say to you, unless one is <strong>born again</strong> he cannot see the kingdom of God.'"
                            <br /><br />
                            <em>(John 3:3)</em>
                        </div>
                    </div>
                </div>

                <div id="next" className="gospel__next">
                    <div className="gospel__next-title">
                        <div className="fa fa-arrow-right" /><br />
                        What next?
                    </div>
                    <div className="gospel__next-content">
                        If you just discovered Jesus and salvation, <strong style={{ color: '#F4511E', fontSize: 33 }}>CONGRATULATIONS</strong>!! This is truly an exciting day.

                        <br /><br />

                        What next steps can you take?

                        <br /><br />

                        1) Find and <strong style={{ color: '#9C27B0', fontSize: 33 }}>REGULARLY ATTEND A SOLID CHURCH</strong>. We recommend a church that teaches <strong style={{ color: '#9C27B0', fontSize: 33 }}>REFORMED</strong> theology. Here are some church directories to help you find a good church:

                        <br /><br />

                        <div><a href="http://www.farese.com/map/#2/39.8/-98.6" target="_blank">Reformed Baptist Church Directory</a></div>
                        <div><a href="http://churches.thegospelcoalition.org/" target="_blank">Gospel Coalition Church Directory</a></div>
                        <div><a href="https://www.9marks.org/church-search/" target="_blank">Gospel 9Marks Church Search</a></div>
                        <div><a href="http://www.pcaac.org/church-search/" target="_blank">PCA Church Directory</a></div>
                        <div><a href="https://www.opc.org/locator.html" target="_blank">OPC Church Directory</a></div>

                        <br />

                        <div className="gospel__next-scripture">
                            "...<strong>not neglecting to meet together</strong>, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near."
                            <br /><br />
                            <em>(Hebrews 10:25)</em>
                        </div>

                        <br /><br />

                        2) Learn more online. Here are some good resources for learning:

                        <br /><br />

                        <div className="gospel__next-resources">
                            <a href="http://www.voddiebaucham.org/" target="_blank">
                                <div className="gospel__next-resource">
                                    <div><img src="/voddie-baucham.jpg" /></div>
                                    Voddie Baucham
                                </div>
                            </a>
                            <a href="https://www.ligonier.org/" target="_blank">
                                <div className="gospel__next-resource">
                                    <div><img src="/ligonier.jpg" /></div>
                                    Ligonier Ministries
                                </div>
                            </a>
                            <a href="https://www.desiringgod.org/" target="_blank">
                                <div className="gospel__next-resource">
                                    <div><img src="/desiring-god.jpg" /></div>
                                    Desiring God
                                </div>
                            </a>
                            <a href="https://www.thegospelcoalition.org/" target="_blank">
                                <div className="gospel__next-resource">
                                    <div><img src="/tgc.jpg" /></div>
                                    The Gospel Coalition
                                </div>
                            </a>
                        </div>
                        <br />
                        <div>
                            <a href="http://www.arbca.com/1689-confession" target="_blank">1689 London Baptist Confession of Faitih</a>
                        </div>
                        <div>
                            <a href="http://www.reformed.org/documents/wcf_with_proofs/" target="_blank">Westminster Confession of Faith</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gospel;
