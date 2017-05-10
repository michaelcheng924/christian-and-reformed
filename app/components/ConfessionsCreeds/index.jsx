import $ from 'jquery';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import CONFESSIONS_CREEDS from 'app/constants/confessions-creeds.js';

export default class ConfessionsCreeds extends Component {
    componentWillMount() {
        if (typeof window !== 'undefined') {
            document.title = 'Confessions and Creeds Comparison';
            document.body.style.background = '#B3E5FC';
        }
    }

    render() {
        return (
            <div className="confessions-creeds">
                <div className="header">
                    <div className="header-title">Confessions and Creeds Comparison</div>
                    <div className="header-subtitle">Tools to help you read and compare the historic confessions and creeds more effectively.</div>
                </div>
                <div className="confessions-creeds__content">
                    {
                        CONFESSIONS_CREEDS.map(item => {
                            return (
                                <Link key={item.name} to={item.url}>
                                    <Card className="confessions-creeds__home-card">
                                        <CardTitle className="confessions-creeds__home-card-title" title={item.name} />
                                        <CardText className="confessions-creeds__card-description">
                                            {item.description}
                                        </CardText>
                                    </Card>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
