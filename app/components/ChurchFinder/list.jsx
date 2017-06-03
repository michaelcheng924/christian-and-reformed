import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardTitle, CardText } from 'material-ui/Card';

export default class ChurchFinderList extends Component {
    renderData(confession) {
        if (!confession) { return null; }

        return <div><i className="fa fa-book" /> {confession}<br /><br /></div>
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
                </div>
                <div className="church-directory__list">
                    {
                        this.props.filteredChurches.map((church, index) => {
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
                                        {this.renderData(confession)}
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
