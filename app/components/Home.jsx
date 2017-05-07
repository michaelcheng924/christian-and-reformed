import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PeopleOutlineIcon from 'material-ui-icons/PeopleOutline';

import { APP_LIST } from 'app/constants/global';

export default class Home extends Component {
	render() {
		return (
			<div>
                <div className="home__header">
                    <div className="home__header-the">The</div>
                    <div className="home__header-title">Reformed Christian App</div>
                    <div className="home__header-tagline">Tools for the Reformed Community</div>
                </div>
                <div className="home__cards">
                    {
                        APP_LIST.map(app => {
                            return (
                                <Link key={app.title} to={app.url}>
                                    <Card className="home__card">
                                        <CardTitle
                                            className="home__card-title" title={app.title}
                                             style={{
                                                background:
                                                    `url('${app.image}') bottom right 15% no-repeat #FFD740`
                                            }}
                                        />
                                        <CardText className="home__card-description">
                                            {app.description}
                                        </CardText>
                                        <CardActions className="home__card-actions">
                                            <FlatButton label={app.buttonText} />
                                        </CardActions>
                                    </Card>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
		);
	}
};
