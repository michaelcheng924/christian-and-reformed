import React, { Component } from 'react';

const SINNED_SCROLLER = [
    {
        text: 'put something else in this world above God',
        scripture: '"You shall have no other gods before me." (Exodus 20:3)'
    },
    {
        text: 'been angry',
        scripture: '"But I say to you that everyone who is angry with his brother will be liable to judgment." (Matthew 5:22a)'
    },
    {
        text: 'looked at a woman or man lustfully',
        scripture: '"But I say to you that everyone who looks at a woman with lustful intent has already committed adultery with her in his heart." (Matthew 5:28)'
    },
    {
        text: 'been jealous',
        scripture: '"You shall not covet your neighbor\'s house; you shall not covet your neighbor\'s wife, or his male servant, or his female servant, or his ox, or his donkey, or anything that is your neighbor\'s." (Exodus 20:17)'
    },
    {
        text: 'lied',
        scripture: '"You shall not bear false witness against your neighbor." (Exodus 20:16)'
    },
    {
        text: 'stolen something',
        scripture: '"You shall not steal." (Exodus 20:15)'
    },
    {
        text: 'used God\'s name in vain (e.g., as an exclamation)',
        scripture: '"You shall not take the name of the Lord your God in vain, for the Lord will not hold him guiltless who takes his name in vain." (Exodus 20:7)'
    }
];

const PUNISHMENT = [
    {
        text: 'hell',
        scripture: '"And do not fear those who kill the body but cannot kill the soul. Rather fear him who can destroy both soul and body in hell." (Matthew 10:28)'
    },
    {
        text: 'eternal torment',
        scripture: '"And the smoke of their torment goes up forever and ever, and they have no rest, day or night, these worshipers of the beast and its image, and whoever receives the mark of its name." (Revelation 14:11)'
    },
    {
        text: 'unquenchable fire',
        scripture: '"His winnowing fork is in his hand, and he will clear his threshing floor and gather his wheat into the barn, but the chaff he will burn with unquenchable fire." (Matthew 3:12)'
    },
    {
        text: 'outer darkness, weeping, and gnashing of teeth',
        scripture: '"Then the king said to the attendants, \'Bind him hand and foot and cast him into the outer darkness. In that place there will be weeping and gnashing of teeth.\'" (Matthew 22:13)'
    }
];

class RepentBelieve extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sinnedInterval: 0,
            punishmentInterval: 0
        };

        this.punishmentInterval = this.punishmentInterval.bind(this);
        this.sinnedInterval = this.sinnedInterval.bind(this);
        this.updateIndex = this.updateIndex.bind(this);
    }

    componentDidMount() {
        setInterval(this.sinnedInterval, 4000);

        setTimeout(() => {
            setInterval(this.punishmentInterval, 4000);
        }, 2000);
    }

    updateIndex(list, stateProperty) {
        const currentIndex = this.state[stateProperty]
        const length = list.length;

        if (currentIndex === length - 1) {
            this.setState({ [stateProperty]: 0 });
        } else {
            this.setState({ [stateProperty]: currentIndex + 1 });
        }
    }

    sinnedInterval() {
        this.updateIndex(SINNED_SCROLLER, 'sinnedInterval');
    }

    punishmentInterval() {
        this.updateIndex(PUNISHMENT, 'punishmentInterval');
    }

    render() {
        const { punishmentInterval, sinnedInterval } = this.state;

        return (
            <div className="repent-believe">
                <div className="repent-believe__header">
                    <div className="repent-believe__header-text">
                        Jesus taught, "Repent and believe" (Mark 1:15).
                    </div>
                    <div className="repent-believe__header-subtext">
                        Learn what this means below.
                    </div>
                </div>

                <div className="repent-believe__repent">
                    <div className="repent-believe__repent-title">
                        Repent
                    </div>

                    <div className="repent-believe__truth-title">
                        Truth #1
                    </div>
                    <p className="repent-believe__truth-text">
                        You have disobeyed God's moral law, or in other words, <strong className="red">sinned</strong> against God.
                    </p>
                    <p>
                        At some point in your life, you have...
                        <br />
                        <span ref={sinned => this.sinned = sinned} className="repent-believe__sinned-scroll-text"><strong>{SINNED_SCROLLER[this.state.sinnedInterval].text}</strong></span>.
                        <br />
                        <span ref={sinnedScripture => this.sinnedScripture = sinnedScripture} className="repent-believe__scripture">{SINNED_SCROLLER[sinnedInterval].scripture}</span>
                    </p>

                    <div className="repent-believe__truth-title">
                        Truth #2
                    </div>
                    <p className="repent-believe__truth-text">
                        The punishment for sin is <span ref={punishment => this.punishment = punishment} className="red"><strong>{PUNISHMENT[punishmentInterval].text}</strong></span>.
                        <br />
                        <span ref={punishmentScripture => this.punishmentScripture = punishmentScripture} className="repent-believe__scripture">{PUNISHMENT[punishmentInterval].scripture}</span>
                    </p>

                    <div className="repent-believe__truth-title">
                        Truth #3
                    </div>
                    <p className="repent-believe__truth-text">
                        Committing even just one sin makes you infinitely guilty because your sin is against an infinitely holy/righteous/perfect God.
                        <br />
                        <span className="repent-believe__scripture">"You therefore must be perfect, as your heavenly Father is perfect." (Matthew 5:48)</span>
                        <br />
                        <span className="repent-believe__scripture">"For whoever keeps the whole law but fails in one point has become guilty of all of it." (James 2:10)</span>
                    </p>

                    <div className="repent-believe__truth-title">
                        Truth #4
                    </div>
                    <p className="repent-believe__truth-text">
                        Repentance involves feeling hatred/sorrow towards your sin and resolving to turn away from it towards obedience to God.
                        <br />
                        <span className="repent-believe__scripture">"Not everyone who says to me, \'Lord, Lord,\' will enter the kingdom of heaven, but the one who does the will of my Father who is in heaven." (Matthew 7:21)</span>
                        <br />
                        <span className="repent-believe__scripture">"What shall we say then? Are we to continue in sin that grace may abound? By no means! How can we who died to sin still live in it? Do you not know that all of us who have been baptized into Christ Jesus were baptized into his death? We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life." (Romans 6:1-4)</span>
                    </p>
                </div>

                <div className="repent-believe__believe">
                    <div className="repent-believe__repent-title">
                        Believe
                    </div>
                    <div className="repent-believe__truth-title repent-believe__truth-believe">
                        Truth #5
                    </div>
                    <p className="repent-believe__truth-text">
                        Jesus, who is fully God, took on a human nature to become a substitute sacrifice for sin and to provide a perfect righteousness to all who believe in Him.
                        <br />
                        <span className="repent-believe__scripture repent-believe__scripture-believe">"For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God." (2 Corinthians 5:21)</span>
                        <br />
                        <span className="repent-believe__scripture repent-believe__scripture-believe">"Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant, being born in the likeness of men. And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross." (Philippians 2:5-8)</span>
                    </p>

                    <div className="repent-believe__truth-title repent-believe__truth-believe">
                        Truth #6
                    </div>
                    <p className="repent-believe__truth-text">
                        Belief, or faith, means trusting in Jesus' atoning work <strong>alone</strong> for your salvation, and <strong>not at all</strong> upon your own good works, merit, or effort.
                        <br />
                        <span className="repent-believe__scripture repent-believe__scripture-believe">"Now to the one who works, his wages are not counted as a gift but as his due. And to the one who does not work but believes in him who justifies the ungodly, his faith is counted as righteousness." (Romans 4:4-5)</span>
                        <br />
                        <span className="repent-believe__scripture repent-believe__scripture-believe">"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast." (Ephesians 2:8-9)</span>
                    </p>

                    <div className="repent-believe__truth-title repent-believe__truth-believe">
                        Truth #7
                    </div>
                    <p className="repent-believe__truth-text">
                        True saving faith will <strong>always</strong> result in a new lifelong desire to obey God's commands in the Bible (see <strong>Truth #4, Repentance,</strong> above).
                    </p>
                    <p>
                        Our repentance/obedience simply gives <strong>evidence</strong> that our faith is genuine; it does <strong>not contribute</strong> to our salvation in any way.
                        <br />
                        <span className="repent-believe__scripture repent-believe__scripture-believe">"For no good tree bears bad fruit, nor again does a bad tree bear good fruit." (Luke 6:43)</span>
                        <br />
                        <span className="repent-believe__scripture repent-believe__scripture-believe">"Examine yourselves, to see whether you are in the faith. Test yourselves. Or do you not realize this about yourselves, that Jesus Christ is in you?—unless indeed you fail to meet the test!" (2 Corinthians 13:5)</span>
                    </p>
                </div>

                <div className="repent-believe__header repent-believe__header-bottom">
                    <div className="repent-believe__header-text">
                        What next?
                    </div>
                    <div className="repent-believe__header-subtext">
                        If you have just repented and believed for the first time (praise God!), here are some next steps to take:
                    </div>
                    <div className="repent-believe__next-steps">
                        <ol>
                            <li>Find a good church that faithfully preaches the Bible and start learning from and fellowshipping with other believers there. To start, try one of these church finders: 
                            <br /><a href="/reformed-church-finder" target="_blank">Reformed Church Finder</a>
                            <br /><a href="http://www.farese.com/map" target="_blank">Reformed Baptist Church Directory</a>
                            <br /><a href="http://churches.thegospelcoalition.org/" target="_blank">Gospel Coalition Church Directory</a>
                            <br /><a href="https://www.9marks.org/church-search/" target="_blank">9Marks Church Search</a></li>
                            <li>Continue studying what the Bible teaches. Here are some great teachers and resources that are available for free online:
                            <br /><a href="https://www.youtube.com/results?search_query=voddie+baucham" target="_blank">Voddie Baucham</a>
                            <br /><a href="http://www.desiringgod.org/" target="_blank">John Piper (Desiring God)</a>
                            <br /><a href="http://www.desiringgod.org/" target="_blank">Paul Washer</a>
                            <br /><a href="https://www.youtube.com/results?search_query=rc+sproul" target="_blank">R.C. Sproul (Ligonier Ministries)</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default RepentBelieve;
