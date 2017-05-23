import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import BAPTIST_CHURCHES from 'app/constants/baptist-churches';

export default class ChurchFinderList extends Component {
    constructor(props) {
        super(props);

        
    }

    renderNotes(notes, familyIntegrated) {
        if (!notes && !familyIntegrated) { return ''; }

        return (
            <div>
                <br />
                <div><strong>Notes:</strong></div>
                {
                    familyIntegrated ? <div><i className="fa fa-users" aria-hidden="true"></i> Family-integrated</div> : null
                }
                {
                    notes && notes.map(note => {
                        if (note.type === 'confession') {
                            return <div key={note.type}><i className="fa fa-book" aria-hidden="true"></i> <strong>Confession:</strong> {note.data}</div>;
                        } else if (note.type === 'meeting at') {
                            return <div key={note.type}><i className="fa fa-home" aria-hidden="true"></i> <strong>Meeting at:</strong> {note.data}</div>;
                        } else if (note.type === 'sermons') {
                            return <div key={note.type}><i className="fa fa-comment" aria-hidden="true"></i> <a className="church-directory__church-link" href={note.data} target="_blank">Sermons</a></div>;
                        } else if (note.type === 'facebook') {
                            return <div key={note.type}><i className="fa fa-facebook-official" aria-hidden="true"></i> <a className="church-directory__church-link" href={note.data} target="_blank">Facebook</a></div>;
                        }
                    })
                }
            </div>
        );
    }

    renderPastors(pastors) {
        if (!pastors) { return null; }

        return (
            <div>
                <br />
                <div><strong>Pastors:</strong></div>
                <div className="church-directory__pastors-container">
                    {
                        pastors.map(pastor => {
                            return (
                                <div key={pastor.name} className="church-directory__pastor">
                                    {
                                        pastor.image
                                            ? <img className="church-directory__pastor-image" src={pastor.image} />
                                            : null
                                    }
                                    <div><strong>{pastor.name}</strong></div>
                                    {
                                        pastor.email
                                            ? <div><a href={`mailto:${pastor.email}`}>{pastor.email}</a></div>
                                            : null
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
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
                    <div>{BAPTIST_CHURCHES.filter(church => church.details.lastUpdated).length}</div>
                </div>
                <div className="church-directory__list">
                    {
                        BAPTIST_CHURCHES.map((church, index) => {
                            const { name, address, website, familyIntegrated, noConfession, notes, pastors, lastUpdated } = church.details;

                            const directionsUrl = `https://maps.google.com?daddr=${address.replace(' ', '+')}`;

                            if (church.details.lastUpdated) {
                                return (
                                    <Card key={index} className="church-directory__list-card">
                                        <CardTitle className="church-directory__list-card-title" title={name} />
                                        <CardText className="church-directory__list-card-description">
                                            <div>{address} (<a href={directionsUrl} target="_blank">Directions</a>)</div>
                                            {this.renderNotes(notes, familyIntegrated)}
                                            {this.renderPastors(pastors)}
                                            <br />
                                            <div><strong>Last updated:</strong> {lastUpdated}</div>
                                        </CardText>
                                    </Card>
                                );
                            }
                        })
                    }
                </div>
            </div>
        );
    }
}
