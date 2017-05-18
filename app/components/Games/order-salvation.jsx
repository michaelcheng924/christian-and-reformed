import $ from 'jquery';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import css from 'classnames';
import { every, last, shuffle } from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import CheckCircleIcon from 'material-ui-icons/CheckCircle';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import OrderSalvationPiece from 'app/components/Games/order-salvation-piece';

const ORDER = [
    {
        name: 'Foreknowledge',
        definition: "God's foreknowledge is not passive knowledge of what someone will decide in the future, but rather an intimate knowledge of a particular group of chosen people, His people."
    },
    {
        name: 'Election/Predestination',
        definition: 'Before the creation of the world, God chose to save His chosen people.'
    },
    {
        name: 'Gospel Call',
        definition: 'God calls His people to faith through the human proclamation of the gospel.'
    },
    {
        name: 'Regeneration',
        definition: 'God grants new spiritual life to His people who have been called.'
    },
    {
        name: 'Conversion',
        definition: 'The new life from regeneration results in repentance and faith in Christ for salvation.'
    },
    {
        name: 'Justification',
        definition: "Through faith, God declares a person forgiven and righteous on account of Christ's righteousness."
    },
    {
        name: 'Adoption',
        definition: 'After being declared righteous, God then makes that person a member of His family.'
    },
    {
        name: 'Sanctification',
        definition: "Salvation is always accompanied by a lifelong pursuit of obedience to and worship of God."
    },
    {
        name: 'Perseverance',
        definition: "All of God's people will be preserved by God's power and persevere as Christians to the end of their lives."
    },
    {
        name: 'Glorification',
        definition: "When Jesus returns, God's people will live with Him with new resurrection bodies that are without sin.",
    }
];

class OrderSalvationContentCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allCorrect: false,
            dragIndex: null,
            isDragging: false,
            open: false,
            order: shuffle(ORDER),
            started: false,
            timer: 0
        };

        this.handleClose = this.handleClose.bind(this);
        this.setParentState = this.setParentState.bind(this);
        this.onStart = this.onStart.bind(this);
        this.saveScore = this.saveScore.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { allCorrect, isDragging } = this.state;

        if (!isDragging && prevState.isDragging && !allCorrect) {
            const allCorrect = true/*every(order, (item, index) => {
                return item.name === ORDER[index].name;
            })*/;

            if (allCorrect) {
                clearInterval(this.timerInterval);

                $('body').scrollTop(0);
                
                this.setState({ allCorrect: true });
            }
        }

        if (allCorrect && !prevState.allCorrect) {
            const { appData } = this.props;
            const orderSalvation = appData.orderSalvation;

            if (orderSalvation.length < 10 || this.isNewScoreBetter(last(orderSalvation).score, this.getTime())) {
                this.handleOpen();
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }

    setParentState(object) {
        this.setState(object);
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    saveScore() {
        this.props.onAddScore({
            key: 'orderSalvation',
            score: {
                name: this.state.saveName,
                score: this.getTime()
            }
        });

        this.handleClose();
    }

    isNewScoreBetter(currentScore, newScore) {
        const splitCurrentScore = currentScore.split(':');
        const splitNewScore = newScore.split(':');
        const currentScoreMin = Number(splitCurrentScore[0]);
        const currentScoreSec = Number(splitCurrentScore[1]);
        const newScoreMin = Number(splitNewScore[0]);
        const newScoreSec = Number(splitNewScore[1]);

        if (newScoreMin < currentScoreMin) {
            return true;
        }

        if (newScoreMin > currentScoreMin) {
            return false;
        }

        if (newScoreMin === currentScoreMin) {
            if (newScoreSec < currentScoreSec) {
                return true;
            }

            if (newScoreSec > currentScoreSec || newScoreSec === currentScoreSec) {
                return false;
            }
        }

        return false;
    }

    getTime() {
        const time = this.state.timer;

        if (time < 60) {
            return `0:${time}`;
        } else if (time >= 60 && time < 120) {
            return `1:${time % 60}`;
        } else if (time >= 120) {
            return `${Math.floor(time / 60)}:${time % 60}`;
        }
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

    onStart() {
        this.setState({ started: true });

        this.timerInterval = setInterval(() => {
            this.setState({ timer: this.state.timer += 1 });
        }, 1000);
    }

    renderContent() {
        const { allCorrect, dragIndex, isDragging, order, started } = this.state;

        if (!started) {
            return (
                <div>
                    <RaisedButton className="order-salvation__start-button" label="Start" primary={true} onTouchTap={this.onStart} />
                </div>
            );
        }

        return (
            <div>
                {
                    !isDragging && allCorrect
                        ? (
                            <div className="bible-order__completed">
                                <CheckCircleIcon />
                                <h2>You finished in {this.getTimeString()}!</h2>
                            </div>
                        )
                        : <div className="order-salvation__timer">{this.getTimeString()}</div>
                }
                {
                    order.map((item, index) => {
                        return <OrderSalvationPiece key={item.name} dragIndex={dragIndex} index={index} item={item} order={order} setParentState={this.setParentState} />;
                    })
                }
            </div>
        );
    }

    renderModal() {
        if (!this.state.open) { return null; }

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                disabled={!this.state.saveName}
                keyboardFocused={Boolean(this.state.saveName)}
                label="Submit"
                primary={true}
                onTouchTap={this.saveScore}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Save score?"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <div>Your score (<strong>{this.getTime()}</strong>) is in the <strong>Top 10</strong>! To save your score, enter your name below and click <strong>Submit</strong>! If you do not want to save your score, click <strong>Cancel</strong>.</div>
                    <TextField
                        floatingLabelText="Enter your name here"
                        onChange={event => this.setState({ saveName: event.target.value })}
                    />
                </Dialog>
            </div>
        );
    }

    render() {
        const classNames = css('order-salvation__content-card-description', {
            'order-salvation__content-card-description--complete': this.state.allCorrect
        });

        return (
            <div>
                <Card className="order-salvation__content-card">
                    <CardTitle
                        className="order-salvation__content-card-title"
                        title="Order the Order of Salvation"
                    />
                    <CardText className={classNames}>
                        {this.renderContent()}
                    </CardText>
                </Card>
                {this.renderModal()}
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(OrderSalvationContentCard);
