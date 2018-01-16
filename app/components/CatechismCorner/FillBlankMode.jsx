import $ from 'jquery';
import React, { Component } from 'react';
import css from 'classnames';
import { partial } from 'lodash';
import Confetti from 'react-confetti';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class MultipleChoiceMode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: [],
            correct: false,
            wrongAnswers: []
        };

        this.onAnswerChange = this.onAnswerChange.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onNavigateNext = this.onNavigateNext.bind(this);
        this.onNavigatePrevious = this.onNavigatePrevious.bind(this);        
        this.onNext = this.onNext.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        $('.catechism-corner__fill-blank input')[0].focus();
    }

    componentWillUpdate(nextProps) {
        if (this.props.number !== nextProps.number || this.props.catechism !== nextProps.catechism) {
            this.setState({
                answers: [],
                correct: false,
                wrongAnswers: []
            });

            document.body.style.background = '#E0F7FA';

            window.removeEventListener('keydown', this.onEnter);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.number !== prevProps.number || this.props.catechism !== prevProps.catechism) {
            setTimeout(() => {
                const input = $('.catechism-corner__fill-blank input')[0];
                if (input) {
                    input.focus();
                }
            }, 100);
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

    onKeyDown(event) {
        if (event.which === 13) {
            this.onSubmit();
        }
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

    onAnswerChange(index, event) {
        this.state.answers[index] = event.target.value;

        this.setState({ answers: this.state.answers, wrongAnswers: [] });

        document.body.style.background = '#E0F7FA';
    }

    onSubmit(event) {
        const { catechism, number, setParentState } = this.props;

        if (event) {
            event.preventDefault();
        }

        let isCorrect = true;

        this.state.answers.forEach((item, index) => {
            const blankAnswer = this.getAnswer(item);
            const answer = this.getAnswer(catechism[number - 1].answer.split(' ')[index]);

            if (blankAnswer !== answer) {
                isCorrect = false;

                this.state.wrongAnswers[index] = true;
            }
        });

        if (isCorrect) {
            setTimeout(() => {
                window.addEventListener('keydown', this.onEnter);
            }, 100);

            this.setState({ correct: true });

            document.body.style.background = '#C8E6C9';
        } else {
            this.setState({ wrongAnswers: this.state.wrongAnswers });

            document.body.style.background = '#FFCDD2';
        }
    }

    getAnswer(string) {
        return string.replace(/[^a-zA-Z ]/gm, '').toLowerCase();
    }

    getBlank(string) {
        return string.replace(/[^\* ]/gm, '');
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

        const question = catechism[number - 1].fillQuestion ? catechism[number - 1].fillQuestion.split(' ') : [];

        let firstInput = true;

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
                                <div className="catechism-corner__fill-blank">
                                    {
                                        question.map((item, index) => {
                                            const classNames = css('catechism-corner__fill-blank-input', {
                                                'catechism-corner__fill-blank-input--wrong': this.state.wrongAnswers[index]
                                            });

                                            return this.getBlank(item) === '**'
                                                ? (
                                                    <TextField
                                                        className={classNames}
                                                        key={index}
                                                        hintText="?"
                                                        underlineStyle={{ borderColor: this.state.wrongAnswers[index] ? '#F44336' : '#333' }}
                                                        underlineFocusStyle={{ borderColor: this.state.wrongAnswers[index] ? '#F44336' : '#00838F' }}
                                                        style={{ width: 135 }}
                                                        onChange={partial(this.onAnswerChange, index)}
                                                        onKeyDown={this.onKeyDown}
                                                    />
                                                )
                                                : index === 0 ? item : ` ${item}`;
                                        })
                                    }
                                    {
                                        showAnswer ? <div className="catechism-corner__show-answer"><strong>{catechism[number - 1].answer}</strong></div> : null
                                    }
                                    <div><RaisedButton label="Submit" primary={true} onClick={this.onSubmit} /></div>
                                </div>
                            )
                    }
                </div>
            </div>
        );
    }
}

export default MultipleChoiceMode;
