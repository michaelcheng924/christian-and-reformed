import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { map } from 'lodash';

import { ROUTES } from 'app/components/Menu';
import { ANSWERS_DATABASE_MAP } from 'app/components/AnswersDatabase/constants';
import { GAMES } from 'app/components/InteractiveTheology';

export default class SiteMap extends Component {
    render() {
        let baseName = '';

        if (typeof window !== 'undefined') {
            baseName = window.location.origin;
        }

        return (
            <div style={{ padding: 20 }}>
                {
                    map(ROUTES, route => {
                        return (
                            <div key={route.url}>
                                <h2><Link to={route.url}>{route.title}</Link></h2>
                                <div>{route.description}</div><br />
                            </div>
                        );
                    })
                }

                {
                    map(ANSWERS_DATABASE_MAP, route => {
                        return (
                            <div key={route.url}>
                                <h2><Link to={route.url}>{route.title}</Link></h2>
                                <div>{route.description}</div><br />
                            </div>
                        );
                    })
                }

                {
                    map(GAMES, route => {
                        return (
                            <div key={route.url}>
                                <h2><Link to={route.url}>{route.title}</Link></h2>
                                <div>{route.description}</div><br />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
