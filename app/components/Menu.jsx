import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'react-router-dom';
import css from 'classnames';
import { debounce, map, partial } from 'lodash';

import { setApp } from 'app/actions/AppActions';
import { incrementScroll } from 'app/api/users';

export const ROUTES = {
    '/': {
        icon: 'plus',
        text: (
            <div className="menu__text">
                <h1>Christian and Reformed</h1>
                <div className="menu__subtitle">Proclaiming historic, timeless truth</div>
            </div>
        ),
        url: '/',
        title: 'Christian and Reformed App',
        description: 'Proclaiming Historic, Timeless Truth'
    },
    '/repent-believe': {
        icon: 'heartbeat',
        text: (
            <div className="menu__text">
                <h1>You must repent and believe</h1>
            </div>
        ),
        url: '/repent-believe',
        title: 'You must repent and believe - Christian and Reformed App',
        description: 'Learn what Jesus meant when He taught, "Repent and believe."'
    },
    // '/reformed-church-finder': {
    //     icon: 'globe',
    //     text: (
    //         <div className="menu__text">
    //             <h1>Reformed Church Finder</h1>
    //         </div>
    //     ),
    //     url: '/reformed-church-finder',
    //     title: 'Reformed Church Finder - Christian and Reformed App',
    //     description: 'Find solid reformed churches.'
    // }
}

class Menu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            expanded: true
        };

        this.expandCollapse = this.expandCollapse.bind(this);
        this.onScroll = debounce(this.onScroll.bind(this), 1000);
        this.setRoute = this.setRoute.bind(this);
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            const pathname = window.location.pathname;

            if (ROUTES[pathname]) {
                this.props.onSetApp(pathname);

                this.setState({
                    expanded: pathname === '/',
                });
            }

            window.addEventListener('scroll', this.onScroll);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.app !== prevProps.app) {
            this.setRoute(this.props.app);

            if (typeof window !== 'undefined' && ROUTES[this.props.app]) {
                console.log(ROUTES);
                document.title = ROUTES[this.props.app].title;
            }
        }
    }

    onScroll() {
        this.props.onScroll({ route: this.props.app });
    }

    expandCollapse() {
        this.setState({ expanded: !this.state.expanded });
    }

    setRoute(route) {
        this.setState({
            expanded: route === '/'
        });
    }

    render() {
        if (typeof window !== 'undefined') {
            const pathname = window.location.pathname;

            if (pathname === '/admin' || pathname === '/statistics') { return null; }
        }

        const { onSetApp } = this.props;

        const currentRoute = ROUTES[this.props.app];

        const classNames = css('menu__options', {
            'menu__options--expanded': this.state.expanded
        });

        const height = this.state.expanded ? 210 : 0;

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
                            if (key === this.props.app) {
                                return null;
                            }

                            return (
                                <Link key={key} to={value.url} onClick={partial(onSetApp, value.url)}>
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

const mapStateToProps = createSelector(
    state => state.app,
    app => ({ ...app })
);

const mapActionsToProps = {
    onScroll: incrementScroll,
    onSetApp: setApp
};

export default connect(mapStateToProps, mapActionsToProps)(Menu);
