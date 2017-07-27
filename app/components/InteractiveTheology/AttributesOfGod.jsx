import $ from 'jquery';
import React, { Component } from 'react';
import { defer, partial, shuffle } from 'lodash';
import css from 'classnames';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Forward from 'material-ui/svg-icons/content/forward';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const ATTRIBUTES = [
    {
        attribute: 'Trinity',
        definition: 'God is one God in three persons, the Father, Son, and Holy Spirit. The three persons are co-equal and co-eternal.',
        meaning: 'God has perfect love and fellowship within Himself. He did not create humans because He needed them or was lonely.',
        scriptures: [
            {
                location: 'Matthew 28:19',
                text: '"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."'
            },
            {
                location: 'John 14:9a',
                text: '"Jesus said to him, \'Have I been with you so long, and you still do not know me, Philip? Whoever has seen me has seen the Father.\'"'
            }
        ]
    },
    {
        attribute: 'Creator',
        definition: 'Everything that exists was made by God.',
        meaning: 'God owns and has authority over everything.',
        scriptures: [
            {
                location: 'Genesis 1:1',
                text: '"In the beginning, God created the heavens and the earth."'
            },
            {
                location: 'Romans 9:21',
                text: '"Has the potter no right over the clay, to make out of the same lump one vessel for honorable use and another for dishonorable use?"'
            }
        ]
    },
    {
        attribute: 'Holy',
        definition: 'God is completely unique and set apart in His righteousness and perfection.',
        meaning: 'We are not holy, so we need a holiness from somewhere else (Jesus) to be with God.',
        scriptures: [
            {
                location: '1 Samuel 2:2a',
                text: '"There is none holy like the Lord..."'
            },
            {
                location: 'Isaiah 64:6a',
                text: '"We have all become like one who is unclean, and all our righteous deeds are like a polluted garment."'
            }
        ]
    },
    {
        attribute: 'Sovereign',
        definition: 'God has complete control over everything that happens in the universe.',
        meaning: <span>We can have absolute confidence in God's promises<br /><br />Even people who disobey God are used by God to bring glory to Himself.</span>,
        scriptures: [
            {
                location: 'Isaiah 46:9b-10',
                text: '"I am God, and there is none like me, declaring the end from the beginning and from ancient times things not yet done, saying, \'My counsel shall stand, and I will accomplish all my purpose.\'"'
            },
            {
                location: 'Isaiah 45:7',
                text: '"I form light and create darkness; I make well-being and create calamity; I am the Lord, who does all these things."'
            }
        ]
    },
    {
        attribute: 'Grace',
        definition: 'God freely and unconditionally forgives and blesses sinners who deserve His wrath.',
        meaning: 'We should be humble and thankful to God for what He has done for us.',
        scriptures: [
            {
                location: 'Romans 5:15',
                text: '"But the free gift is not like the trespass. For if many died through one man\'s trespass, much more have the grace of God and the free gift by the grace of that one man Jesus Christ abounded for many."'
            },
            {
                location: 'John 1:16',
                text: '"For from his fullness we have all received, grace upon grace."'
            }
        ]
    },
    {
        attribute: 'Love',
        definition: "God demonstrates the ultimate form of this by sending His Son to die on the cross for sinners. He shows a general form of this by giving material blessings to all people.",
        meaning: 'God has a special saving love for His people and a general love for all humans.',
        scriptures: [
            {
                location: '1 John 4:10',
                text: '"In this is love, not that we have loved God but that he loved us and sent his Son to be the propitiation for our sins."'
            },
            {
                location: 'Matthew 5:45b',
                text: '"For he makes his sun rise on the evil and on the good, and sends rain on the just and on the unjust."'
            }
        ]
    },
    {
        attribute: 'Truth',
        definition: "God never lies.",
        meaning: "We can trust God's words in the Bible, since it is 'breathed out by God.'",
        scriptures: [
            {
                location: '2 Timothy 3:16',
                text: '"All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness..."'
            },
            {
                location: 'Titus 1:2',
                text: '"...in hope of eternal life, which God, who never lies, promised before the ages began."'
            }
        ]
    },
    {
        attribute: 'Just',
        definition: 'God will reward good and punish evil.',
        meaning: "We all deserve God's punishment because we all have a sinful nature. The only escape is if we repent and believe in Jesus.",
        scriptures: [
            {
                location: 'Romans 2:6-11',
                text: '"He will render to each one according to his works: 7 to those who by patience in well-doing seek for glory and honor and immortality, he will give eternal life; but for those who are self-seeking and do not obey the truth, but obey unrighteousness, there will be wrath and fury. There will be tribulation and distress for every human being who does evil, the Jew first and also the Greek, but glory and honor and peace for everyone who does good, the Jew first and also the Greek. For God shows no partiality."'
            },
            {
                location: 'Deuteronomy 7:9-10',
                text: '"Know therefore that the Lord your God is God, the faithful God who keeps covenant and steadfast love with those who love him and keep his commandments, to a thousand generations, and repays to their face those who hate him, by destroying them. He will not be slack with one who hates him. He will repay him to his face."'
            }
        ]
    },
    {
        attribute: 'Immutable',
        definition: "God does not and cannot change.",
        meaning: 'We can have confidence that God will fulfill all of His promises.',
        scriptures: [
            {
                location: 'Numbers 23:19',
                text: '"God is not man, that he should lie, or a son of man, that he should change his mind. Has he said, and will he not do it? Or has he spoken, and will he not fulfill it?"'
            },
            {
                location: 'Hebrews 13:8',
                text: '"Jesus Christ is the same yesterday and today and forever."'
            }
        ]
    },
    {
        attribute: 'Wise',
        definition: "All of God's decisions are the best decisions that could have been made.",
        meaning: 'Even if we do not like something that God ordains, we can trust that God has a good purpose for it.',
        scriptures: [
            {
                location: 'Job 12:13',
                text: '"With God are wisdom and might; he has counsel and understanding."'
            },
            {
                location: 'Proverbs 3:19',
                text: '"The Lord by wisdom founded the earth; by understanding he established the heavens."'
            }
        ]
    },
    {
        attribute: 'Omniscient',
        definition: "God knows everything, including all of our thoughts.",
        meaning: 'Even if we can hide things from other people, we cannot hide anything from God.',
        scriptures: [
            {
                location: 'Psalm 139:1-4',
                text: '"O Lord, you have seasrched me and known me! You know when I sit down and when I rise up; you discern my thoughts from afar. You search out my path and my lying down and are acquainted with all my ways. Even before a word is on my tongue, behold, O Lord, you know it altogether."'
            },
            {
                location: 'Acts 1:24',
                text: '"And they prayed and said, \'You, Lord, who know the hearts of all, show which one of these two you have chosen.\'"'
            }
        ]
    },
    {
        attribute: 'Personal',
        definition: "God knows each person individually.",
        meaning: 'If we have repented and believed in Jesus, we can have comfort that God knows us by name and cares for us.',
        scriptures: [
            {
                location: 'Matthew 6:25-26',
                text: '"Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on. Is not life more than food, and the body more than clothing? Look at the birds of the air: they neither sow nor reap nor gather into barns, and yet your heavenly Father feeds them. Are you not of more value than they?"'
            }
        ]
    }
];

class AttributesOfGod extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            answer: null,
            finalAnswer: null,
            isWrong: false,
            number: 0,
            showAll: false,
            showDetails: false,
            shuffledAttributes: shuffle(ATTRIBUTES),
            shuffledChoices: shuffle(ATTRIBUTES)
        };

        this.onAnswer = this.onAnswer.bind(this);
        this.onNext = this.onNext.bind(this);
        this.reset = this.reset.bind(this);
        this.setAnswer = this.setAnswer.bind(this);
        this.setMode = this.setMode.bind(this);
    }

    setMode(value) {
        const isAnswers = value === 'answers';

        this.setState({
            finalAnswer: isAnswers ? false : this.state.finalAnswer,
            isWrong: isAnswers ? false : this.state.isWrong,
            number: isAnswers ? 0 : this.state.number,
            showAll: isAnswers,
            showDetails: isAnswers ? false : this.state.showDetails,
            shuffledAttributes: shuffle(ATTRIBUTES),
            shuffledChoices: shuffle(ATTRIBUTES)
        });
    }

    reset() {
        this.setState({
            finalAnswer: false,
            isWrong: false,
            number: 0,
            showAll: false,
            showDetails: false,
            shuffledAttributes: shuffle(ATTRIBUTES),
            shuffledChoices: shuffle(ATTRIBUTES)
        });
    }

    onAnswer(answer) {
        const { number, shuffledAttributes } = this.state;

        $(this.container).scrollTop(0);

        if (shuffledAttributes[number].attribute === answer) {
            this.setState({ finalAnswer: answer, isWrong: false, showDetails: true });
        } else {
            this.setState({ finalAnswer: answer, isWrong: true });
        }
    }

    setAnswer(answer, isMouseOver) {
        this.setState({
            answer,
            finalAnswer: isMouseOver ? null : this.state.finalAnswer,
            isWrong: isMouseOver ? false : this.state.isWrong

        });
    }

    onNext() {
        this.setState({
            finalAnswer: null,
            number: this.state.number + 1,
            showAll: this.state.number + 1 === ATTRIBUTES.length,
            showDetails: false
        });
    }

    renderCongratulations() {
        if (this.state.number < ATTRIBUTES.length) { return null; }

        return (
            <div>
                <div className="attributes-of-god__congratulations">
                    <i className="fa fa-check" />Hooray, you finished!
                </div>
                <div><RaisedButton className="attributes-of-god__play-again" label="Play again" primary={true} onClick={this.reset} /></div>
            </div>
        );
    }

    renderNext() {
        const { finalAnswer, isWrong, number } = this.state;

        if (!finalAnswer || isWrong || number === ATTRIBUTES.length) { return null; }

        return (
            <FloatingActionButton className="attributes-of-god__next-button" onClick={this.onNext}>
                <Forward />
            </FloatingActionButton>
        );
    }

    renderCard(attribute, answerClassNames, showDetailsClassNames, name) {
        return (
            <div key={attribute.attribute} className="attributes-of-god__card">
                <div className={answerClassNames}>
                    {name}
                </div>
                <div className="attributes-of-god__card-question">
                    <strong>Definition: </strong>{attribute.definition}
                </div>
                <div className="attributes-of-god__card-question">
                    <strong>Meaning: </strong><span className={showDetailsClassNames}>{attribute.meaning}</span>
                </div>
                <div className="attributes-of-god__card-question">
                    <strong><u>Scriptures</u></strong>
                    <div>
                        {
                            attribute.scriptures.map(scripture => {
                                return (
                                    <p key={scripture.location} className="attributes-of-god__card-scripture">
                                        <span className={showDetailsClassNames}>{scripture.text}</span><br />
                                        <span className={showDetailsClassNames}><strong>- {scripture.location}</strong></span>
                                    </p>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

    renderAll() {
        return (
            <div className="attributes-of-god__content">
                {
                    ATTRIBUTES.map(attribute => {
                        return this.renderCard(attribute, 'attributes-of-god__card-answer', 'attributes-of-god__conditional-show--show', attribute.attribute);
                    })
                }
            </div>
        );
    }

    render() {
        const { answer, finalAnswer, isWrong, number, showAll, showDetails, shuffledAttributes, shuffledChoices } = this.state;

        const attribute = shuffledAttributes[number];

        const name = answer || finalAnswer || <span className="attributes-of-god__click-answer">Click attribute</span>;

        const answerClassNames = css('attributes-of-god__card-answer', {
            'attributes-of-god__card-answer--answered': finalAnswer,
            'attributes-of-god__card-answer--wrong': isWrong
        });

        const showDetailsClassNames = css('attributes-of-god__conditional-show', {
            'attributes-of-god__conditional-show--show': showDetails
        });

        const choiceClassNames = css('attributes-of-god__choice', {
            'attributes-of-god__choice--disabled': finalAnswer && !isWrong
        });

        return (
            <div className="attributes-of-god" ref={container => this.container = container}>
                <h2>Attributes of God</h2>
                <div className="attributes-of-god__mode-toggle-container">
                    <RadioButtonGroup className="attributes-of-god__mode-toggle" name="mode-toggle" defaultSelected="game">
                        <RadioButton
                            value="game"
                            label="Game mode"
                            onClick={partial(this.setMode, 'game')}
                        />
                        <RadioButton
                            value="answers"
                            label="Show answers"
                            onClick={partial(this.setMode, 'answers')}
                        />
                    </RadioButtonGroup>
                </div>

                {this.renderCongratulations()}

                {
                    showAll
                    ? this.renderAll()
                    : (
                        <div className="attributes-of-god__content">
                            <div>
                                {this.renderNext()}
                                <div className="attributes-of-god__progress">{`${number} / ${ATTRIBUTES.length}`}</div>
                                {this.renderCard(attribute, answerClassNames, showDetailsClassNames, name)}
                            </div>
                            <div className="attributes-of-god__choices">
                                {
                                    shuffledChoices.map(attribute => {
                                        return (
                                            <span
                                                key={attribute.attribute}
                                                className={choiceClassNames}
                                                onMouseOver={partial(this.setAnswer, attribute.attribute, true)}
                                                onMouseLeave={partial(this.setAnswer, null, false)}
                                                onClick={partial(this.onAnswer, attribute.attribute)}
                                            >
                                                {attribute.attribute}
                                            </span>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default AttributesOfGod;
