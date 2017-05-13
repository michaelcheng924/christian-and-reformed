import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

export default class ConfessionsCreedsContentCard extends Component {
    constructor(props) {
        super(props);
        
        
    }

    render() {
        const { data, name } = this.props

        return (
            <Card className="catechism-training__content-card">
                <CardTitle
                    className="catechism-training__content-card-title"
                    title={name}
                />
                <CardText>
                    
                </CardText>
            </Card>
        );
    }
}
