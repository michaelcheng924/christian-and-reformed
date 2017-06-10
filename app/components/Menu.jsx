import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from 'classnames';
import { map, partial } from 'lodash';

const ROUTES = {
    '/': {
        icon: 'plus',
        text: (
            <div className="menu__text">
                <h1>Christian and Reformed</h1>
                <div className="menu__subtitle">Proclaiming historic, timeless truth</div>
            </div>
        ),
        url: '/'
    },
    '/salvation': {
        icon: 'heartbeat',
        text: (
            <div className="menu__text">
                <h1>3 truths about salvation</h1>
            </div>
        ),
        url: '/salvation'
    }
}

class Menu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            expanded: true,
            route: '/'
        };

        this.expandCollapse = this.expandCollapse.bind(this);
        this.setRoute = this.setRoute.bind(this);
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            const pathname = window.location.pathname;

            if (ROUTES[pathname]) {
                this.setState({
                    expanded: pathname === '/',
                    route: pathname
                });
            }
        }
    }

    expandCollapse() {
        this.setState({ expanded: !this.state.expanded });
    }

    setRoute(route) {
        this.setState({
            route,
            expanded: route === '/'
        });
    }

    render() {
        const currentRoute = ROUTES[this.state.route];

        const classNames = css('menu__options', {
            'menu__options--expanded': this.state.expanded
        });

        const height = this.state.expanded ? 70 : 0;

        return (
            <div className="menu">
                <Link to={currentRoute.url} onClick={this.expandCollapse}>
                    <div className="menu__option menu__option--selected">
                        <div className="menu__icon">
                            <i className={`fa fa-${currentRoute.icon}`} />
                        </div>
                        {currentRoute.text}
                        <i className="fa fa-chevron-down" />
                    </div>
                </Link>
                <div className={classNames} style={{ height }}>
                    {
                        map(ROUTES, (value, key) => {
                            if (key === this.state.route) {
                                return null;
                            }

                            return (
                                <Link key={key} to={value.url} onClick={partial(this.setRoute, value.url)}>
                                    <div className="menu__option">
                                        <div className="menu__icon">
                                            <i className={`fa fa-${value.icon}`} />
                                        </div>
                                        {value.text}
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Menu;
