import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import css from 'classnames';
import { debounce, map, partial } from 'lodash';

import { incrementScroll } from 'app/api/users';

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
    },
    '/bible': {
        icon: 'book',
        text: (
            <div className="menu__text">
                <h1>Proof/Evidence for the Bible</h1>
            </div>
        ),
        url: '/bible'
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
        this.onScroll = debounce(this.onScroll.bind(this), 1000);
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

            window.addEventListener('scroll', this.onScroll);
        }
    }

    onScroll() {
        this.props.onScroll({ route: this.state.route });
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
        if (typeof window !== 'undefined') {
            const pathname = window.location.pathname;

            if (pathname === '/admin') { return null; }
        }

        const currentRoute = ROUTES[this.state.route];

        const classNames = css('menu__options', {
            'menu__options--expanded': this.state.expanded
        });

        const height = this.state.expanded ? 140 : 0;

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

const mapActionsToProps = {
    onScroll: incrementScroll
};

export default connect(null, mapActionsToProps)(Menu);
