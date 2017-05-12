import $ from 'jquery';
import React, { Component } from 'react';
import css from 'classnames';
import { delay, indexOf, partial, shuffle } from 'lodash';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import KeyboardArrowLeftIcon from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight';
import Slider from 'material-ui/Slider';

import { CHOICE_MAPPING } from 'app/constants/catechism-boys-girls';
import { CORRECT_RESPONSES } from 'app/constants/global';

export default class CatechismTrainingPractice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            choices: [],
            inputValue: '',
            questionCorrect: false,
            questionWrong: false,
            showAnswer: false,
            showMultipleChoice: false
        };

        this.onJumpToNumber = this.onJumpToNumber.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onShowAnswer = this.onShowAnswer.bind(this);
        this.onShowMultipleChoice = this.onShowMultipleChoice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        if (typeof window !== 'undefined') {
            $('body').on('keypress', this.onKeyPress);
        }
    }

    componentWillUnmount() {
        $('body').off('keypress', this.onKeyPress);
    }

    onJumpToNumber(event, newValue) {
        this.props.setParentState({ questionNumber: newValue });

        if (this.state.showMultipleChoice) {
            this.getChoices();
        }
    }

    onKeyPress(event) {
        if (event.which === 13) {
            event.preventDefault();
            this.onSubmit();
        }
    }

    onReset() {
        this.props.setParentState({
            questionNumber: 1
        });

        this.setState({
            inputValue: '',
            questionCorrect: false,
            questionWrong: false
        });
    }

    onShowAnswer() {
        this.setState({ showAnswer: !this.state.showAnswer });
    }

    onShowMultipleChoice() {
        this.setState({ showMultipleChoice: !this.state.showMultipleChoice, questionWrong: false });

        this.getChoices();
    }

    getChoices() {
        const { currentQuestion } = this.props;
        const currentNumber = currentQuestion.id;

        let choices = [currentNumber];

        if (currentNumber > 1) {
            let found = false;

            while (found === false) {
                const number = currentNumber - Math.floor(Math.random() * 8 + 1);

                if (number < currentNumber && number > 0) {
                    choices.push(number);
                    found = true;
                }
            }
        }

        while (choices.length < 4) {
            const number = currentNumber + Math.floor(Math.random() * 12 + 1);

            if (indexOf(choices, number) === -1) {
                choices.push(number);
            }
        }

        choices = shuffle(choices);

        this.setState({ choices });
    }

    onSubmit(multipleChoiceAnswer) {
        const { catechismData, currentQuestion, getAnswer, setParentState } = this.props;

        const answer = getAnswer(currentQuestion.answer);
        const userAnswer = getAnswer(multipleChoiceAnswer || this.state.inputValue);

        if (answer === userAnswer) {
            if (currentQuestion.id === catechismData.length) {

            } else {
                this.setState({ questionCorrect: true });

                delay(() => {
                    setParentState({ questionNumber: currentQuestion.id + 1 });
                    this.setState({ inputValue: '', questionCorrect: false });

                    if (this.state.showMultipleChoice) {
                        this.getChoices();
                    }
                }, 670);
            }

            this.setState({ questionWrong: false });
        } else {
            this.setState({ questionWrong: true });
        }
    }

    renderMultipleChoice() {
        return (
            <div className="catechism-training__multiple-choice-section">
                {
                    this.state.choices.map((choice, index) => {
                        const answer = this.props.catechismData[choice - 1].answer;

                        return (
                            <div
                                key={choice}
                                onClick={partial(this.onSubmit, answer)}
                            >
                                {`${CHOICE_MAPPING[index]}) ${answer}`}
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    render() {
        const { questionCorrect, questionWrong, showAnswer, showMultipleChoice } = this.state;
        const { catechismData, currentQuestion, setParentState } = this.props;
        const questionNumber = currentQuestion.id;

        const classNames = css('catechism-training__challenge catechism-training__practice', {
            'catechism-training__challenge--correct': questionCorrect,
            'catechism-training__challenge--wrong': questionWrong
        });

        return (
            <div className={classNames}>
                <div className="catechism-training__practice-toggles">
                    <Checkbox
                        className="catechism-training__practice-checkbox"
                        label={showAnswer ? 'Hide answer' : 'Show answer'}
                        onCheck={this.onShowAnswer}
                    />
                    <Checkbox
                        className="catechism-training__practice-checkbox"
                        label={showMultipleChoice ? 'Hide multiple choice' : 'Show multiple choice'}
                        onCheck={this.onShowMultipleChoice}
                    />
                </div>
                <Card className="catechism-training__card">
                    <CardTitle className="catechism-training__card-question" title={questionCorrect ? CORRECT_RESPONSES[Math.floor(Math.random() * CORRECT_RESPONSES.length - .05)] : `${questionNumber}) ${currentQuestion.question}`} />
                    <CardText className="catechism-training__card-answer">
                        <div className="catechism-training__practice-navigation">
                            {
                                questionNumber > 1
                                    ? <KeyboardArrowLeftIcon onClick={() => this.onJumpToNumber(null, questionNumber - 1)} />
                                    : <div style={{width: 40}} />
                            }
                            <div className="catechism-training__slider-container">
                                Slide to question
                                <Slider
                                    className="catechism-training__slider"
                                    min={1}
                                    max={catechismData.length}
                                    onChange={this.onJumpToNumber}
                                    step={1}
                                    value={questionNumber}
                                />
                            </div>
                            {
                                questionNumber < catechismData.length
                                    ? <KeyboardArrowRightIcon onClick={() => this.onJumpToNumber(null, questionNumber + 1)} />
                                    : <div style={{width: 40}} />
                            }
                        </div>
                        {
                            showMultipleChoice
                                ? this.renderMultipleChoice()
                                : (
                                    <TextField
                                        className="catechism-training__input"
                                        errorText={questionWrong ? ' ' : null}
                                        floatingLabelText="Answer"
                                        multiLine={true}
                                        onChange={event => this.setState({ inputValue: event.target.value, questionWrong: false })}
                                        ref={input => this.input = input}
                                        value={this.state.inputValue}
                                    />
                                )
                        }
                        {
                            questionWrong || showAnswer
                                ? <div className="catechism-training__correct-answer">{currentQuestion.answer}</div>
                                : null
                        }
                        {
                            showMultipleChoice
                                ? null
                                : <RaisedButton className="catechism-training__submit" label="Submit" primary={true} onTouchTap={this.onSubmit} />
                        }
                    </CardText>
                </Card>
            </div>
        );
    }
}
