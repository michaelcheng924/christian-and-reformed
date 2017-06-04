import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import css from 'classnames';
import { delay, every, isArray, partial } from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CheckCircleIcon from 'material-ui-icons/CheckCircle';

import { incrementCourseCount } from 'app/api/users';

class VideoAudioContentCard extends Component {
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

    componentDidUpdate(prevProps, prevState) {
        const { currentQuestionIndex } = this.state;
        const { data, onIncrementCourseCount } = this.props;

        if (currentQuestionIndex > prevState.currentQuestionIndex && currentQuestionIndex === data.questions.length) {
            onIncrementCourseCount({ courseKey: data.key });
        }
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
        const { appData, data, name } = this.props;

        return (
            <Card className="video-audio__content-card">
                <CardTitle
                    className="video-audio__content-card-title"
                    title={name}
                />
                <CardText>
                    <center><h2>What is the gospel/salvation?</h2></center>
                    <br />
                    <div className="video-audio__videos-container">
                        <div>
                            <h3>What is the gospel?</h3>
                            <p><strong>Overview:</strong> John Piper summarizes the gospel.</p>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/ClfLFeb5vww" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3>What is the gospel?</h3>
                            <p><strong>Overview:</strong> Steve Lawson summarizes the gospel.</p>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/4exu-7RDdKE" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3>True Salvation/Regeneration vs. a False "Decision"</h3>
                            <p><strong>Overview:</strong> Paul Washer critiques "decisional" conversion and explains what true conversion/regeneration looks like.</p>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/shxQcczYuAA?start=1907" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                    <br /><br />

                    <center><h2>Proof/evidence that the Bible is true</h2></center>
                    <br />
                    <div className="video-audio__videos-container">
                        <div>
                            <h3>Presuppositional Apologetics</h3>
                            <p><strong>Overview:</strong> Greg Bahsen explains presuppositional apologetics, which argues that the Christian worldview/Bible is the necessary starting point for knowledge itself, which means that it is impossible to even argue against Christianity without first assuming that Christianity is true.</p>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/EqMpflXOQnQ" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3>Jesus' Resurrection</h3>
                            <p><strong>Overview:</strong> William Lane Craig gives evidence for Jesus' resurrection.
                            <br /><small><em>Note: Craig's theology is not reformed, but his presentation on this topic is excellent.</em></small></p>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/4iyxR8uE9GQ" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3>Is the New Testament Historically Reliable?</h3>
                            <p><strong>Overview:</strong> Frank Turek provides six reasons why we can trust the New Testament.
                            <br /><small><em>Note: Turek's theology is not reformed.</em></small></p>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/KmA6kOWwfWI" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3>Archaeological Evidence</h3>
                            <p><strong>Overview:</strong> This presenter provides a list of archaeological discoveries that confirm the Bible's history.</p>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/FxHYh3QZbTI" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                    <br /><br />

                    <center><h2>Doctrines of Grace</h2></center>
                    <br />
                    <div className="video-audio__videos-container">
                        <div>
                            <h3>Amazing Grace, Part 1</h3>
                            <p><strong>Overview:</strong> Part 1 explains the history of the debate between Calvinism and Arminianism by examining the debate between Augistine and Pelagius, Luther and Erasmus, and the Synod of Dordt and Arminius.</p>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/oCtrOqYXekE" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3>Amazing Grace, Part 2</h3>
                            <p><strong>Overview:</strong> Part 2 supports the five points of Calvinism with Scripture and answers questions against them, as well as provides an application of Calvinism compared to Arminianism.</p>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/rdbLouq98L4" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3>Amazing Grace, Part 3</h3>
                            <p><strong>Overview:</strong> Part 3 is about the relationship between Calvinism and evangelism.</p>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/pBB74tt8W14" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                    <br /><br />

                    <center><h2>Church</h2></center>
                    <br />
                    <div className="video-audio__videos-container">
                        <div>
                            <h3>The Importance of Attending a Local Church</h3>
                            <p><strong>Overview:</strong> Voddie Baucham explains why attending a local church is not optional.</p>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/iZur9xIjZpM" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                    <br /><br />

                    <center><h2>Love and Marriage</h2></center>
                    <br />
                    <div className="video-audio__videos-container">
                        <div>
                            <h3>Love and Marriage, Part 1 - In the Beginning</h3>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/chAvBs5Fexw" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3>Love and Marriage, Part 2 - True Love</h3>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/WZHn3wy7wvQ" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3>Love and Marriage, Part 3 - The Other Half</h3>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/Orhgx1gSlJQ" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3>Love and Marriage, Part 4 - The Better Half</h3>
                            <iframe width="300" height="169" src="https://www.youtube.com/embed/zVt74HfNK7I" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>

                    {/*<div className="video-audio__course-count">This course has been completed <strong>{appData[data.key] || 0}</strong> times.</div>
                    <div className="video-audio__course-content">
                        <div className="video-audio__media" dangerouslySetInnerHTML={{__html: data.iframe}} />
                        {this.renderQuestions()}
                    </div>*/}
                </CardText>
            </Card>
        );
    }
}

const mapStateToProps = createSelector(
    state => state.app,
    app => ({ ...app })
);

const mapActionsToProps = {
    onIncrementCourseCount: incrementCourseCount
};

export default connect(mapStateToProps, mapActionsToProps)(VideoAudioContentCard);
