import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import Challenge from 'app/components/CatechismTraining/challenge';
import Practice from 'app/components/CatechismTraining/practice';

export default class ConfessionsCreedsContentCard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mode: 'challenge',
            open: false,
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
        const { mode, open, questionNumber } = this.state;
        const { appData, data, name, selection } = this.props;

        const isBoysGirls = name === 'Catechism for Boys and Girls Training';
        const scores = isBoysGirls ? appData.boysGirls : appData.westminsterShorter;

        const props = {
            selection,
            catechismData: data,
            currentQuestion: data[questionNumber - 1],
            getAnswer: this.getAnswer,
            setParentState: this.setParentState
        };

        return (
            <div>
                <Card className="catechism-training__content-card">
                    <CardTitle
                        className="catechism-training__content-card-title"
                        title={name}
                    />
                    <CardText>
                        <RadioButtonGroup name="catechismMode" defaultSelected="challenge" onChange={this.onModeChange}>
                            <RadioButton
                                className="catechism-training__mode-button"
                                value="challenge"
                                label="Challenge"
                            />
                            <RadioButton
                                className="catechism-training__mode-button"
                                value="practice"
                                label="Practice"
                            />
                        </RadioButtonGroup>
                        <hr />
                        {
                            mode === 'challenge'
                                ? <Challenge {...props} isBoysGirls={isBoysGirls} open={open} scores={scores} />
                                : <Practice {...props} />
                        }
                    </CardText>
                </Card>
            </div>
        );
    }
}
