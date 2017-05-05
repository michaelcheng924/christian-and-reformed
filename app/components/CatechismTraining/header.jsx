import React, { createClass } from 'react';
import { partial } from 'lodash';
import { Link } from 'react-router';

const CatechismTrainingHeader = createClass({
    displayName: 'CatechismTrainingHeader',

    onChangeMode(mode) {
        this.props.setParentState({ mode });
    },

    render() {
        return (
            <div className="section__heading">
                <Link to="/">
                    <button className="section__back-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                        Back
                    </button>
                </Link>
                <div className="section__card-description mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Catechism for Boys and Girls Training</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <div><strong>Challenge</strong> - How far can you get without messing up?</div>
                        <div><strong>Practice</strong> - Tools to help you and your children learn the catechism faster.</div>

                        <div className="catechism-training__mode-switcher">
                            <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="option-1">
                                <input
                                    type="radio"
                                    id="option-1"
                                    className="mdl-radio__button"
                                    name="options"
                                    onChange={partial(this.onChangeMode, 'challenge')}
                                    value="1"
                                    checked={this.props.mode === 'challenge'}
                                />
                                <span className="mdl-radio__label">Challenge</span>
                            </label>
                            <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="option-2">
                                <input
                                    type="radio"
                                    id="option-2"
                                    className="mdl-radio__button"
                                    name="options"
                                    onChange={partial(this.onChangeMode, 'practice')}
                                    value="2"
                                    checked={this.props.mode === 'practice'}
                                />
                                <span className="mdl-radio__label">Practice</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default CatechismTrainingHeader;
