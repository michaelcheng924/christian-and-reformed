import React, { Component } from 'react';
import css from 'classnames';
import { get, every, partial } from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CheckCircleIcon from 'material-ui-icons/CheckCircle';

import BIBLE_ORDER from 'app/constants/game-bible-order';

export default class BibleOrderContentCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allCorrect: false,
            ot: [],
            nt: [],
            started: false,
            timer: 0
        };
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onStart = this.onStart.bind(this);
    }

    onStart() {
        this.setState({ started: true });

        this.timerInterval = setInterval(() => {
            this.setState({ timer: this.state.timer += 1 });
        }, 1000);
    }

    getTimeString() {
        const time = this.state.timer;

        if (time < 60) {
            return `${time} seconds`;
        } else if (time >= 60 && time < 120) {
            return `1 minute ${time % 60} seconds`;
        } else if (time >= 120) {
            return `${Math.floor(time / 60)} minutes ${time % 60} seconds`;
        }
    }

    onInputChange(index, type, event) {
        this.state[type][index] = {
            correct: event.target.value.toLowerCase() === BIBLE_ORDER.data[type][index].toLowerCase(),
            value: event.target.value
        };

        let allCorrect = this.state.ot.length === 39
            && this.state.nt.length === 27
            && every(this.state.ot, item => item.correct)
            && every(this.state.nt, item => item.correct);

        if (allCorrect) {
            this.setState({ allCorrect: true });
            clearInterval(this.timerInterval);
            return;
        }

        this.setState({ [type]: this.state[type] });
    }

    renderContent() {
        if (this.state.allCorrect) {
            return (
                <div className="bible-order__completed">
                    <CheckCircleIcon />
                    <h2>You finished in {this.getTimeString()}!</h2>
                </div>
            );
        }

        if (!this.state.started) {
            return <RaisedButton className="bible-order__start-button" label="Start" primary={true} onTouchTap={this.onStart} />;
        }

        return (
            <div className="bible-order__game-section-container">
                <div className="bible-order__timer">{this.getTimeString()}</div>
                <div className="bible-order__game-section">
                    <div className="bible-order__ot">
                        <h2>Old Testament Books</h2>
                        {
                            BIBLE_ORDER.data.ot.map((book, index) => {
                                const isCorrect = this.state.ot[index] && this.state.ot[index].correct;

                                const classNames = css('bible-order__input', {
                                    'bible-order__input--correct': isCorrect
                                });

                                return (
                                    <div key={index}>
                                        <span>{`${index + 1} - `}</span>
                                        <TextField
                                            id={book}
                                            className={classNames}
                                            onChange={partial(this.onInputChange, index, 'ot')}
                                            underlineFocusStyle={isCorrect ? { borderColor: '#4CAF50' } : {}}
                                            underlineStyle={isCorrect ? { borderColor: '#4CAF50' } : {}}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="bible-order__nt">
                        <h2>New Testament Books</h2>
                        {
                            BIBLE_ORDER.data.nt.map((book, index) => {
                                const isCorrect = this.state.nt[index] && this.state.nt[index].correct;

                                const classNames = css('bible-order__input', {
                                    'bible-order__input--correct': isCorrect
                                });

                                return (
                                    <div key={index}>
                                        <span>{`${index + 40} - `}</span>
                                        <TextField
                                            id={book}
                                            className={classNames}
                                            onChange={partial(this.onInputChange, index, 'nt')}
                                            underlineFocusStyle={isCorrect ? { borderColor: '#4CAF50' } : {}}
                                            underlineStyle={isCorrect ? { borderColor: '#4CAF50' } : {}}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <Card className="bible-order__content-card">
                <CardTitle
                    className="bible-order__content-card-title"
                    title="Bible Books Order Challenge"
                />
                <CardText className="bible-order__content-card-description">
                    {this.renderContent()}
                </CardText>
            </Card>
        );
    }
}
