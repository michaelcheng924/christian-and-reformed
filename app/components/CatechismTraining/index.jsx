import React, { createClass } from 'react';
import { Link } from 'react-router';
import BOYS_GIRLS from 'app/constants/catechism-boys-girls';
import CatechismTrainingHeader from 'app/components/CatechismTraining/header';
import CatechismTrainingChallenge from 'app/components/CatechismTraining/challenge';

const CatechismTraining = createClass({
    displayName: 'CatechismTraining',

    getInitialState() {
        return {
            mode: 'challenge',
            questionCorrect: false,
            questionNumber: 1,
            questionWrong: false
        };
    },

    setParentState(object) {
        this.setState(object);
    },

    getAnswer(string) {
        return string.replace(/[^a-zA-Z ]/gm, '').toLowerCase();
    },

    render() {
        const { mode, questionCorrect, questionNumber, questionWrong } = this.state;

        return (
            <div className="catechism-training">
                <CatechismTrainingHeader mode={mode} setParentState={this.setParentState} />

                <div className="catechism-training__main-section">
                    {
                        mode === 'challenge'
                            ? (
                                <CatechismTrainingChallenge
                                    currentQuestion={BOYS_GIRLS[questionNumber - 1]}
                                    getAnswer={this.getAnswer}
                                    questionCorrect={questionCorrect}
                                    questionWrong={questionWrong}
                                    setParentState={this.setParentState}
                                />
                            )
                            : (
                                <div />
                            )
                    }
                </div>
            </div>
        );
    }
});

export default CatechismTraining;
