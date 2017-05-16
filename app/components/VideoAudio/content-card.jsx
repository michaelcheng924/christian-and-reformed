import React, { Component } from 'react';
import css from 'classnames';
import { delay, every, isArray, partial } from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CheckCircleIcon from 'material-ui-icons/CheckCircle';

export default class VideoAudioContentCard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentAnswer: null,
            currentQuestionIndex: 0,
            isAnswerCorrect: false,
            isAnswerWrong: false
        };

        this.onFillInTheBlank = this.onFillInTheBlank.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    getAnswer(string) {
        return string.replace(/[^a-zA-Z ]/gm, '').toLowerCase();
    }

    onFillInTheBlank(index, event) {
        let currentAnswer = this.state.currentAnswer;

        if (!currentAnswer) {
            currentAnswer = [];
        }

        currentAnswer[index] = event.target.value;

        this.setState({ currentAnswer, isAnswerWrong: false });
    }

    onSubmit(trueFalse, event) {
        event.preventDefault();

        const { currentAnswer, currentQuestionIndex } = this.state;
        const { data } = this.props;

        let isAnswerCorrect = false;
        const questionData = data.questions[currentQuestionIndex];
        const { answer, type } = questionData;

        if (currentAnswer && type === 'FITB') {
            if (isArray(answer)) {
                isAnswerCorrect = every(answer, (item, index) => this.getAnswer(item) === this.getAnswer(currentAnswer[index]));
            }
        }

        if (type === 'TF') {
            isAnswerCorrect = trueFalse === answer;
        }

        this.setState({
            isAnswerCorrect,
            isAnswerWrong: !isAnswerCorrect
        });

        if (isAnswerCorrect) {
            delay(() => {
                this.setState({
                    currentAnswer: null,
                    currentQuestionIndex: currentQuestionIndex + 1,
                    isAnswerCorrect: false
                });
            }, 600);
        }
    }

    renderQuestions() {
        const { currentQuestionIndex, isAnswerCorrect, isAnswerWrong } = this.state;
        const { data } = this.props;

        const finished = currentQuestionIndex === data.questions.length;

        const classNames = css('video-audio__questions', {
            'video-audio__questions--correct': isAnswerCorrect,
            'video-audio__questions--wrong': isAnswerWrong,
            'video-audio__questions--finished': finished
        });

        return (
            <Paper className={classNames} zDepth={3}>
                {
                    finished
                        ? (
                            <div className="video-audio__finished">
                                <CheckCircleIcon />
                                <h2>Finished!</h2>
                            </div>
                        )
                        : (
                            <div>
                                <div className="video-audio__questions-progress">
                                    <div>{currentQuestionIndex + 1} / {data.questions.length}</div>
                                    <progress className="video-audio__questions-progress-bar" value={currentQuestionIndex + 1} max={data.questions.length + 1} />
                                </div>
                                <h2>Question #{currentQuestionIndex + 1}</h2>
                                {
                                    data.questions[currentQuestionIndex].time
                                        ? (
                                            <div><small><em><strong>Time:</strong> about {data.questions[currentQuestionIndex].time}</em></small></div>
                                        )
                                        : null
                                }
                                <div>{this.renderQuestion()}</div>
                            </div>
                        )
                }
            </Paper>
        );
    }

    renderQuestion() {
        const { currentQuestionIndex } = this.state;
        const { data } = this.props;

        const question = data.questions[currentQuestionIndex];

        if (question.type === 'FITB') {
            const splitQuestion = question.question.split('***');

            return (
                <form className="video-audio__question" onSubmit={partial(this.onSubmit, null)}>
                    {
                        splitQuestion.map((part, index) => {
                            const blank = index === splitQuestion.length - 1
                                ? null
                                : (
                                    <TextField
                                        className="video-audio__blank"
                                        errorText={null}
                                        hintText="Answer"
                                        onChange={partial(this.onFillInTheBlank, index)}
                                        onKeyPress={this.onKeyPress}
                                        underlineStyle={{ borderColor: '#FFEB3B' }}
                                        value={this.state.currentAnswer ? this.state.currentAnswer[index] : ''}
                                    />
                                );

                            return (
                                <span key={index}>
                                    {part}
                                    {blank}
                                </span>
                            );
                        })
                    }
                    <div><RaisedButton className="video-audio__question-submit" label="Submit" primary={true} onTouchTap={this.onSubmit} /></div>
                </form>
            );
        }

        if (question.type === 'TF') {
            return (
                <div className="video-audio__true-false-container">
                    <span className="video-audio__true-false" onClick={partial(this.onSubmit, 'true')}>True</span>
                    {` / `}
                    <span className="video-audio__true-false" onClick={partial(this.onSubmit, 'false')}>False</span>
                    {` - `}
                    {question.question}
                </div>
            );
        }
    }

    render() {
        const { data, name } = this.props;

        return (
            <Card className="video-audio__content-card">
                <CardTitle
                    className="video-audio__content-card-title"
                    title={name}
                />
                <CardText>
                    <div className="video-audio__course-content">
                        <div className="video-audio__media" dangerouslySetInnerHTML={{__html: data.iframe}} />
                        {this.renderQuestions()}
                    </div>
                </CardText>
            </Card>
        );
    }
}