import $ from 'jquery';
import React, { Component } from 'react';
import css from 'classnames';
import { delay } from 'lodash';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { CORRECT_RESPONSES } from 'app/constants/global';

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
            console.log(this);
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
                this.setState({ questionCorrect: true });

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
        const { questionCorrect, questionWrong } = this.state;
        const { currentQuestion } = this.props;

        const classNames = css('catechism-training__challenge', {
            'catechism-training__challenge--correct': questionCorrect,
            'catechism-training__challenge--wrong': questionWrong
        });

        return (
            <div className={classNames}>
                <Card className="catechism-training__card">
                    <CardTitle className="catechism-training__card-question" title={questionCorrect ? CORRECT_RESPONSES[Math.floor(Math.random() * CORRECT_RESPONSES.length - .05)] : currentQuestion.question} />
                    <CardText className="catechism-training__card-answer">
                        <TextField
                            className="catechism-training__input"
                            disabled={questionWrong}
                            errorText={questionWrong ? ' ' : null}
                            floatingLabelText="Answer"
                            multiLine={true}
                            onChange={event => this.setState({ inputValue: event.target.value })}
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
                    </CardText>
                </Card>
            </div>
        );
    }
}
