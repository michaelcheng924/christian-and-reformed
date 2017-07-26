import $ from 'jquery';
import React, { Component } from 'react';
import { partial, shuffle } from 'lodash';
import css from 'classnames';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Forward from 'material-ui/svg-icons/content/forward';

const ATTRIBUTES = [
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
        this.setAnswer = this.setAnswer.bind(this);
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

    setAnswer(answer) {
        this.setState({ answer });
    }

    onNext() {
        this.setState({ finalAnswer: null, number: this.state.number + 1, showAll: this.state.number + 1 === ATTRIBUTES.length });
    }

    renderNext() {
        const { finalAnswer, isWrong, number } = this.state;

        if (!finalAnswer || isWrong || number === ATTRIBUTES.length) { return null; }

        return (
            <FloatingActionButton onClick={this.onNext}>
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

        return (
            <div className="attributes-of-god" ref={container => this.container = container}>
                <h2>Attributes of God</h2>

                {
                    showAll
                    ? this.renderAll()
                    : (
                        <div className="attributes-of-god__content">
                            <div>
                                {this.renderNext()}
                                {this.renderCard(attribute, answerClassNames, showDetailsClassNames, name)}
                            </div>
                            <div className="attributes-of-god__choices">
                                {
                                    shuffledChoices.map(attribute => {
                                        return (
                                            <div
                                                key={attribute.attribute}
                                                className="attributes-of-god__choice"
                                                onMouseOver={partial(this.setAnswer, attribute.attribute)}
                                                onMouseLeave={partial(this.setAnswer, null)}
                                                onClick={partial(this.onAnswer, attribute.attribute)}
                                            >
                                                {attribute.attribute}
                                            </div>
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
