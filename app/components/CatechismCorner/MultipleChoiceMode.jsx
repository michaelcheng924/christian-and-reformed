import React, { Component } from 'react';
import css from 'classnames';
import { partial, shuffle, some } from 'lodash';
import Confetti from 'react-confetti';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class MultipleChoiceMode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            correct: false,
            options: this.getOptions()
        };

        this.onEnter = this.onEnter.bind(this);
        this.onNavigateNext = this.onNavigateNext.bind(this);
        this.onNavigatePrevious = this.onNavigatePrevious.bind(this);        
        this.onNext = this.onNext.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillUpdate(nextProps) {
        if (this.props.number !== nextProps.number || this.props.catechism !== nextProps.catechism) {
            this.setState({
                correct: false,
                options: this.getOptions(nextProps.number, nextProps.catechism)
            });

            document.body.style.background = '#E0F7FA';

            window.removeEventListener('keydown', this.onEnter);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEnter);
    }

    onEnter(event) {
        if (event.which === 13 && this.state.correct) {
            this.onNext();
        }
    }

    getOptions(currentNumber, currentCatechism) {
        const catechism = currentCatechism || this.props.catechism;
        const number = currentNumber || this.props.number;

        const options = [number];

        let newNumber;
        const max = this.props.catechism.length;

        while (options.length < 4) {
            newNumber = (Math.round(Math.random() * 10) + number - 5);
            if (!some(options, option => option === newNumber) && newNumber >= 1 && newNumber <= max) {
                options.push(newNumber);
            }
        }
        
        return shuffle(options.map(option => {
            return catechism[option - 1].answer;
        }));
    }

    onNavigateNext() {
        this.props.setParentState({ number: this.props.number + 1 });
    }

    onNavigatePrevious() {
        this.props.setParentState({ number: this.props.number - 1 });
    }

    onNext() {
        this.props.setParentState({ number: this.props.number + 1 });

        document.body.style.background = '#E0F7FA';
    }

    onSubmit(clickedAnswer) {
        const { catechism, number, setParentState } = this.props;

        const selectedAnswer = this.getAnswer(clickedAnswer);
        const answer = this.getAnswer(catechism[number - 1].answer);

        if (selectedAnswer && answer && selectedAnswer.toLowerCase() === answer.toLowerCase()) {
            setTimeout(() => {
                window.addEventListener('keydown', this.onEnter);
            }, 100);

            this.setState({ correct: true });

            document.body.style.background = '#C8E6C9';
        } else {
            document.body.style.background = '#FFCDD2';
        }
    }

    getAnswer(string) {
        return string.replace(/[^a-zA-Z ]/gm, '').toLowerCase();
    }

    render() {
        const { contentHeight, correct, options } = this.state;
        const { catechism, number, showAnswer } = this.props;

        const navPreviousClassNames = css('fa fa-angle-left', {
            'catechism-corner__navigation--hidden': number <= 1
        });

        const navNextClassNames = css('fa fa-angle-right', {
            'catechism-corner__navigation--hidden': number >= catechism.length
        });

        return (
            <div className="catechism-corner__content" ref={type => this.type = type}>
                <div>
                    {
                        correct
                            ? (
                                <div className="catechism-corner__navigation">
                                    <div className="catechism-corner__number">{number}</div>
                                </div>
                            )
                            : (
                                <div className="catechism-corner__navigation">
                                    <div className={navPreviousClassNames} onClick={this.onNavigatePrevious} />
                                    <div className="catechism-corner__number">{number}</div>
                                    <div className={navNextClassNames} onClick={this.onNavigateNext} />
                                </div>
                            )
                    }

                    <div className="catechism-corner__question">{catechism[number - 1].question}</div>

                    {
                        correct
                            ? (
                                <div>
                                    <Confetti height={1000} width={2000} />
                                    <div className="catechism-corner__answer">{catechism[number - 1].answer}</div>
                                    <div><RaisedButton label="Next" primary={true} onClick={this.onNext} /></div>
                                </div>
                            )
                            : (
                                <div className="catechism-corner__multiple-choice-options">
                                    {
                                        showAnswer ? <div className="catechism-corner__show-answer"><strong>{catechism[number - 1].answer}</strong></div> : null
                                    }
                                    {
                                        options.map((option, index) => {
                                            let letter;

                                            if (index === 0) {
                                                letter = 'A';
                                            } else if (index === 1) {
                                                letter = 'B';
                                            } else if (index === 2) {
                                                letter = 'C';
                                            } else if (index === 3) {
                                                letter = 'D';
                                            }

                                            return (
                                                <div
                                                    key={index}
                                                    className="catechism-corner__multiple-choice-option"
                                                    onClick={partial(this.onSubmit, option)}
                                                >
                                                    <strong>{letter})</strong> {option}
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            )
                    }
                </div>
            </div>
        );
    }
}

export default MultipleChoiceMode;
