import React, { Component } from 'react';
import css from 'classnames';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import BOYS_GIRLS from 'app/constants/catechism-boys-girls';
import WESTMINSTER_SHORTER from 'app/constants/catechism-westminster-shorter';
import CatechismTrainingChallenge from 'app/components/CatechismTraining/challenge';
import CatechismTrainingPractice from 'app/components/CatechismTraining/practice';

class CatechismTraining extends Component {
    constructor(props) {
        super(props);

        this.state = {
            catechism: 'boysGirls',
            mode: 'challenge',
            questionNumber: 1
        };

        this.getAnswer = this.getAnswer.bind(this);
        this.onChangeCatechism = this.onChangeCatechism.bind(this);
        this.onModeChange = this.onModeChange.bind(this);
        this.setParentState = this.setParentState.bind(this);
    }

    componentWillMount() {
        if (typeof window !== 'undefined') {
            document.title = 'Catechism for Boys and Girls Training';
            document.body.style.background = '#F3E5F5';
        }
    }

    setParentState(object) {
        this.setState(object);
    }

    onChangeCatechism(event, key, value) {
        this.setState({
            catechism: value,
            questionNumber: 1
        });
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
        const { catechism, mode, questionNumber } = this.state;

        const classNames = css('catechism-training__modes-section', {
            'catechism-training__modes-section--practice': mode === 'practice'
        });

        const catechismData = catechism === 'boysGirls' ? BOYS_GIRLS : WESTMINSTER_SHORTER;

        return (
            <div className="catechism-training">
                <div className="header">
                    <div className="header-title">Catechism for Boys and Girls Training</div>
                    <div className="header-subtitle">An app to help you and your children learn the catechism faster.</div>
                    <DropDownMenu
                        className="catechism-training__dropdown"
                        value={catechism}
                        onChange={this.onChangeCatechism}
                        style={{ width: 300 }}
                        autoWidth={false}
                    >
                        <MenuItem value="boysGirls" primaryText="Catechism for Boys and Girls" />
                        <MenuItem value="westminsterShorter" primaryText="Westminster Shorter Catechism" />
                    </DropDownMenu>
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
                                catechismData={catechismData}
                                currentQuestion={catechismData[questionNumber - 1]}
                                getAnswer={this.getAnswer}
                                setParentState={this.setParentState}
                            />
                        )
                        : (
                            <CatechismTrainingPractice
                                catechismData={catechismData}
                                currentQuestion={catechismData[questionNumber - 1]}
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
