import React, { createClass } from 'react';
import $ from 'jquery';
import css from 'classnames';
import { delay, noop } from 'lodash';

const CatechismTrainingChallenge = createClass({
    displayName: 'CatechismTrainingChallenge',

    componentDidMount() {
        this.updateHeight();

        $(this.input).on('keypress', event => {
            if (event.which === 13) {
                event.preventDefault();
                this.onSubmit({ preventDefault: noop });
            }
        });
    },

    updateHeight() {
        const input = this.input;

        input.style.height = 0;
        input.style.height = `${input.scrollHeight}px`;
    },

    onSubmit(event) {
        event.preventDefault();

        const { currentQuestion, getAnswer, questionWrong } = this.props;

        if (questionWrong) { return; }

        const userAnswer = getAnswer(this.input.value);
        const actualAnswer = getAnswer(currentQuestion.answer);

        if (userAnswer === actualAnswer) {
            this.onCorrect();
        } else {
            this.onWrong();
        }
    },

    onCorrect() {
        const { currentQuestion, setParentState } = this.props;

        if (currentQuestion.id === 135) {

        } else {
            setParentState({ questionCorrect: true });

            delay(() => {
                setParentState({
                    questionCorrect: false,
                    questionNumber: currentQuestion.id + 1
                });

                this.input.value = '';
            }, 500);
        }
    },

    onWrong() {
        this.props.setParentState({ questionWrong: true });
    },

    onReset() {
        this.props.setParentState({
            questionNumber: 1,
            questionWrong: false
        });

        this.input.value = '';
        this.updateHeight();
    },

    render() {
        const { currentQuestion, questionCorrect, questionWrong, setParentState } = this.props;

        const classNames = css('catechism-training__main-card mdl-card mdl-shadow--2dp', {
            'catechism-training__main-card--correct': questionCorrect,
            'catechism-training__main-card--wrong': questionWrong
        });

        return (
            <div className={classNames}>
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">
                        {`${currentQuestion.id}) ${currentQuestion.question}`}
                    </h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <form onSubmit={this.onSubmit}>
                        <div className="catechism-training__input mdl-textfield mdl-js-textfield">
                            <textarea
                                className="mdl-textfield__input"
                                disabled={questionWrong}
                                type="text"
                                ref={input => this.input = input}
                                onChange={this.updateHeight}
                            />
                            <label className="mdl-textfield__label" htmlFor="sample5">Type answer here</label>
                        </div>
                        {
                            questionWrong
                                ? <div className="catechism-training__correct">{currentQuestion.answer}</div>
                                : (
                                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                                        Submit
                                    </button>
                                )
                        }
                        {
                            questionWrong
                                ? (
                                    <button
                                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
                                        onClick={this.onReset}
                                    >
                                        Start over
                                    </button>
                                )
                                : null
                        }
                    </form>
                </div>
            </div>
        );
    }
});

export default CatechismTrainingChallenge;
