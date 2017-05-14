import React, { Component } from 'react';
import { partial } from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

export default class VideoAudioContentCard extends Component {
    renderQuestions() {
        const { data } = this.props;

        return (
            <Paper className="video-audio__questions" zDepth={3}>
                <h2>Questions</h2>
                {
                    data.questions.map((question, index) => {
                        if (question.type === 'TF') {
                            return (
                                <div key={index}>
                                    {`${index + 1}) `}
                                    <span
                                        className="video-audio__true-false">
                                        True
                                    </span>
                                    {` / `}
                                    <span
                                        className="video-audio__true-false">
                                        False
                                    </span>
                                    {` - ${question.question}`}
                                </div>
                            );
                        }

                        return (
                            <div>
                                <div></div>
                            </div>
                        );
                    })
                }
            </Paper>
        );
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
                        <div dangerouslySetInnerHTML={{__html: data.iframe}} />
                        {this.renderQuestions()}
                    </div>
                </CardText>
            </Card>
        );
    }
}