import $ from 'jquery';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import css from 'classnames';
import { every, shuffle } from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import CheckCircleIcon from 'material-ui-icons/CheckCircle';

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
            dragIndex: null,
            isDragging: false,
            order: shuffle(ORDER),
            started: false,
            timer: 0
        };

        this.setParentState = this.setParentState.bind(this);
        this.onStart = this.onStart.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }

    setParentState(object) {
        this.setState(object);
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
        const { dragIndex, isDragging, order, started } = this.state;

        const allCorrect = every(order, (item, index) => {
            return item.name === ORDER[index].name;
        });

        if (!isDragging && allCorrect) {
            clearInterval(this.timerInterval);

            $('body').scrollTop(0);
        }

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

    render() {
        const classNames = css('order-salvation__content-card-description', {
            'order-salvation__content-card-description--complete': this.state.allCorrect
        });

        return (
            <Card className="order-salvation__content-card">
                <CardTitle
                    className="order-salvation__content-card-title"
                    title="Order the Order of Salvation"
                />
                <CardText className={classNames}>
                    {this.renderContent()}
                </CardText>
            </Card>
        );
    }
}

export default DragDropContext(HTML5Backend)(OrderSalvationContentCard);
