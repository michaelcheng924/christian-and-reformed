import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

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
            order: ORDER,
            started: false
        };

        this.setParentState = this.setParentState.bind(this);
        this.onStart = this.onStart.bind(this);
    }

    setParentState(object) {
        this.setState(object);
    }

    onStart() {
        this.setState({ started: true });
    }

    renderContent() {
        const { order, started } = this.state;

        if (!started) {
            return <RaisedButton className="order-salvation__start-button" label="Start" primary={true} onTouchTap={this.onStart} />;
        }

        return (
            <div>
                {
                    order.map((item, index) => {
                        return <OrderSalvationPiece key={item.name} index={index} item={item} order={order} setParentState={this.setParentState} />;
                    })
                }
            </div>
        );
    }

    render() {
        return (
            <Card className="order-salvation__content-card">
                <CardTitle
                    className="order-salvation__content-card-title"
                    title="Order the Order of Salvation"
                />
                <CardText className="order-salvation__content-card-description">
                    {this.renderContent()}
                </CardText>
            </Card>
        );
    }
}

export default DragDropContext(HTML5Backend)(OrderSalvationContentCard);
