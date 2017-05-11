import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { partial } from 'lodash';
import WarningIcon from 'material-ui-icons/Warning';

import { APP_LIST } from 'app/constants/global';
import { setApp } from 'app/actions/AppActions';

class Home extends Component {
    constructor(props) {
        super(props);

        this.onAppClick = this.onAppClick.bind(this);
    }

    componentWillMount() {
        if (typeof window !== 'undefined') {
            document.title = 'Reformed Toolbox: Technology Serving Truth';
            document.body.style.background = '#90CAF9';
        }
    }

    onAppClick(url) {
        this.props.onSetApp(url);
    }

	render() {
		return (
			<div>
                <div className="home__apps">
                    {
                        APP_LIST.map(app => {
                            return (
                                <Link
                                    key={app.title}
                                    className="home__app-link"
                                    onClick={partial(this.onAppClick, app.url)}
                                    to={app.url}
                                >
                                    <div className="home__app-container">
                                        <div className="home__app" style={{ background: app.background }}>
                                            <div>
                                                {
                                                    app.underConstruction
                                                        ? (
                                                            <div className="home__construction">
                                                                <WarningIcon className="home__icon--construction" /> In progress
                                                            </div>
                                                        )
                                                        : null
                                                }
                                                {app.icon}
                                                <h2>{app.title}</h2>
                                                <div>{app.description}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
		);
	}
};

const mapActionsToProps = {
    onSetApp: setApp
};

export default connect(null, mapActionsToProps)(Home);
