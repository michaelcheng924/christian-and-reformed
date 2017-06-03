import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import { DIRECTORY_1689 } from 'app/constants/directory-1689';

export default class ChurchFinderList extends Component {
    constructor(props) {
        super(props);

        
    }

    render() {
        return (
            <div>
                <div className="church-directory__search-section">
                    <TextField
                        className="church-directory__search-section-input"
                        hintText="Search churches"
                        hintStyle={{color: '#E7E7E7'}}
                        underlineStyle={{borderColor: '#FFF'}}
                    />
                    <div>{DIRECTORY_1689.length}</div>
                </div>
                <div className="church-directory__list">
                    {
                        DIRECTORY_1689.map((church, index) => {
                            const { name, address, region, website, email, pastor, confession, lastUpdated } = church;

                            const directionsUrl = `https://maps.google.com?daddr=${address.replace(' ', '+')}`;

                            return (
                                <Card key={index} className="church-directory__list-card">
                                    <CardTitle className="church-directory__list-card-title" title={name} />
                                    <CardText className="church-directory__list-card-description">
                                        <div>{address} (<a href={directionsUrl} target="_blank">Directions</a>)</div>
                                        <br />
                                        <div><strong>Website:</strong> {website}</div>
                                        <br />
                                        <div><strong>Last updated:</strong> {lastUpdated}</div>
                                    </CardText>
                                </Card>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
