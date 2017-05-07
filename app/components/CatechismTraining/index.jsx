import React, { Component } from 'react';
import css from 'classnames';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';

import BOYS_GIRLS from 'app/constants/catechism-boys-girls';
import CatechismTrainingChallenge from 'app/components/CatechismTraining/challenge';
import CatechismTrainingPractice from 'app/components/CatechismTraining/practice-mode';

class CatechismTraining extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 'challenge',
            questionNumber: 1
        };

        this.getAnswer = this.getAnswer.bind(this);
        this.onModeChange = this.onModeChange.bind(this);
        this.setParentState = this.setParentState.bind(this);
    }

    setParentState(object) {
        this.setState(object);
    }

    onModeChange(event) {
        this.setState({
            mode: event.target.value,
            questionNumber: 1
        });
    }

    getAnswer(string) {
        return string.replace(/[^a-zA-Z ]/gm, '').toLowerCase();
    }

    render() {
        const { mode, questionNumber } = this.state;

        const classNames = css('catechism-training__modes-section', {
            'catechism-training__modes-section--practice': mode === 'practice'
        });

        return (
            <div className="catechism-training">
                <div className="catechism-training__header">
                    <div className="catechism-training__header-title">Catechism for Boys and Girls Training</div>
                    <div className="catechism-training__header-subtitle">An app to help you and your children learn the catechism faster.</div>
                </div>
                <div className={classNames}>
                    <RadioButtonGroup name="shipSpeed" defaultSelected="challenge" onChange={this.onModeChange}>
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
                </div>
                {
                    mode === 'challenge'
                        ? (
                            <CatechismTrainingChallenge
                                currentQuestion={BOYS_GIRLS[questionNumber - 1]}
                                getAnswer={this.getAnswer}
                                setParentState={this.setParentState}
                            />
                        )
                        : (
                            <CatechismTrainingPractice
                                currentQuestion={BOYS_GIRLS[questionNumber - 1]}
                                getAnswer={this.getAnswer}
                                setParentState={this.setParentState}
                            />
                        )
                }
            </div>
        );
    }
}

export default CatechismTraining;
