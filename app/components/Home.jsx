import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PeopleOutlineIcon from 'material-ui-icons/PeopleOutline';

import { APP_LIST } from 'app/constants/global';

export default class Home extends Component {
    componentWillMount() {
        if (typeof window !== 'undefined') {
            document.title = 'The Reformed Christian App: ';
            document.body.style.background = '#4DB6AC';
        }
    }

	render() {
		return (
			<div>
                <div className="home__header">
                    <div className="home__header-title">Reformed Toolbox</div>
                    <div className="home__header-tagline">Technology Serving Historic Truth</div>
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
                                            <FlatButton label="Open" />
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
