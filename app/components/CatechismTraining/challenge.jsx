import $ from 'jquery';
import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import css from 'classnames';
import { delay } from 'lodash';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import { CORRECT_RESPONSES } from 'app/constants/global';
import SaveScoreModal from 'app/components/SaveScoreModal';
import Leaderboard from 'app/components/Leaderboard';

export default class CatechismTrainingChallenge extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            questionCorrect: false,
            questionWrong: false
        };

        this.onKeyPress = this.onKeyPress.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        if (typeof window !== 'undefined') {
            $('body').on('keypress', this.onKeyPress);
        }
    }

    componentWillUnmount() {
        $('body').off('keypress', this.onKeyPress);
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

    onSubmit() {
        const { currentQuestion, getAnswer, setParentState } = this.props;

        const answer = getAnswer(currentQuestion.answer);
        const userAnswer = getAnswer(this.state.inputValue);

        if (answer === userAnswer) {
            if (currentQuestion.id === 135) {

            } else {
                this.setState({
                    questionCorrect: true,
                    questionCorrectText: CORRECT_RESPONSES[Math.floor(Math.random() * CORRECT_RESPONSES.length - .01)]
                });

                delay(() => {
                    setParentState({ questionNumber: currentQuestion.id + 1 });
                    this.setState({ inputValue: '', questionCorrect: false });
                }, 670);
            }
        } else {
            this.setState({ questionWrong: true });
        }
    }

    render() {
        const { questionCorrect, questionCorrectText, questionWrong } = this.state;
        const { currentQuestion } = this.props;

        const classNames = css('catechism-training__main', {
            'catechism-training__main--correct': questionCorrect,
            'catechism-training__main--wrong': questionWrong
        });

        return (
            <div className={classNames}>
                <Paper className="catechism-training__main-paper" zDepth={5}>
                    <div className="catechism-training__main-question">{`${currentQuestion.id}) ${currentQuestion.question}`}</div>
                    <TextField
                        className="catechism-training__input"
                        disabled={questionWrong}
                        errorText={questionWrong ? ' ' : null}
                        floatingLabelText="Answer"
                        multiLine={true}
                        onChange={event => this.setState({ inputValue: event.target.value })}
                        underlineFocusStyle={{ borderColor: '#FFEB3B' }}
                        ref={input => this.input = input}
                        value={this.state.inputValue}
                    />
                    {
                        questionWrong
                            ? <div className="catechism-training__correct-answer">{currentQuestion.answer}</div>
                            : null
                    }
                    {
                        questionWrong
                            ? <RaisedButton className="catechism-training__start-over" label="Start over" secondary={true} onTouchTap={this.onReset} />
                            : <RaisedButton className="catechism-training__submit" label="Submit" primary={true} onTouchTap={this.onSubmit} />
                    }
                    <CSSTransitionGroup
                        transitionName="catechismCorrect"
                        transitionEnter={true}
                        transitionEnterTimeout={400}
                        transitionLeave={true}
                        transitionLeaveTimeout={400}
                    >
                        {
                            questionCorrect
                                ? (
                                    <Paper className="catechism-training__paper-correct" zDepth={2}>
                                        <div>{questionCorrectText}</div>
                                    </Paper>
                                )
                                : null
                        }
                    </CSSTransitionGroup>
                </Paper>
            </div>
        );
    }
}
