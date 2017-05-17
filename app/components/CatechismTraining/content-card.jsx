import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import Challenge from 'app/components/CatechismTraining/challenge';
import Practice from 'app/components/CatechismTraining/practice';

export default class ConfessionsCreedsContentCard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mode: 'practice',
            questionNumber: 1
        };

        this.onModeChange = this.onModeChange.bind(this);
        this.setParentState = this.setParentState.bind(this);
    }

    setParentState(object) {
        this.setState(object);
    }

    onModeChange(event) {
        this.setState({ mode: event.target.value });
    }

    getAnswer(string) {
        return string.replace(/[^a-zA-Z ]/gm, '').toLowerCase();
    }

    render() {
        const { mode, questionNumber } = this.state;
        const { data, name } = this.props

        const props = {
            catechismData: data,
            currentQuestion: data[questionNumber - 1],
            getAnswer: this.getAnswer,
            setParentState: this.setParentState
        };

        return (
            <Card className="catechism-training__content-card">
                <CardTitle
                    className="catechism-training__content-card-title"
                    title={name}
                />
                <CardText>
                    <RadioButtonGroup name="catechismMode" defaultSelected="practice" onChange={this.onModeChange}>
                        <RadioButton
                            className="catechism-training__mode-button"
                            value="practice"
                            label="Practice"
                        />
                        <RadioButton
                            className="catechism-training__mode-button"
                            value="challenge"
                            label="Challenge (How far can you get?)"
                        />
                    </RadioButtonGroup>
                    <hr />
                    {
                        mode === 'challenge'
                            ? <Challenge {...props} />
                            : <Practice {...props} />
                    }
                </CardText>
            </Card>
        );
    }
}
