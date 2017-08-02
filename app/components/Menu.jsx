import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'react-router-dom';
import css from 'classnames';
import { debounce, map, partial } from 'lodash';

import { GAMES } from 'app/components/InteractiveTheology';
import { setApp, setSubApp } from 'app/actions/AppActions';
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
        title: 'You must repent and believe',
        description: 'Learn what Jesus meant when He taught people to repent and believe.',
        image: 'http://app.christianandreformed.com/repent-believe-image.png'
    },
    '/answers-database': {
        icon: 'question-circle',
        text: (
            <div className="menu__text">
                <h1>Answers Database</h1>
            </div>
        ),
        url: '/answers-database',
        title: 'Answers Database',
        description: 'Answers to all kinds of questions related to Christianity.',
        image: 'http://app.christianandreformed.com/answers-database-image.png'
    },
    '/reformed-church-finder': {
        icon: 'globe',
        text: (
            <div className="menu__text">
                <h1>Reformed Church Finder</h1>
            </div>
        ),
        url: '/reformed-church-finder',
        title: 'Reformed Church Finder',
        description: 'Find solid reformed churches all over the world.',
        image: 'http://app.christianandreformed.com/church-finder-image.png'
    },
    '/interactive-theology': {
        icon: 'puzzle-piece',
        text: (
            <div className="menu__text">
                <h1>Interactive Theology</h1>
            </div>
        ),
        url: '/interactive-theology',
        title: 'Interactive Theology',
        description: 'Have fun learning the Bible.'
    }
}

class Menu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            expanded: false
        };

        this.expandCollapse = this.expandCollapse.bind(this);
        this.onScroll = debounce(this.onScroll.bind(this), 1000);
        this.onSetApp = this.onSetApp.bind(this);
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            const pathname = window.location.pathname;

            if (ROUTES[pathname]) {
                this.props.onSetApp(pathname);
            }

            if (GAMES[pathname]) {
                document.title = GAMES[pathname].title;
                this.props.onSetApp('/interactive-theology');
                this.props.onSetSubApp(pathname);
            }

            window.addEventListener('scroll', this.onScroll);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.app !== prevProps.app || this.props.subApp !== prevProps.subApp) {
            this.setState({ expanded: false });

            if (typeof window !== 'undefined' && ROUTES[this.props.app]) {
                if (!this.props.subApp) {
                    document.title = ROUTES[this.props.app].title;
                }

                const pathname = window.location.href;

                if (pathname.indexOf('/interactive-theology/') === -1 && pathname.indexOf('/answers-database/') === -1) {
                    this.props.onSetSubApp('');
                }
            }
        }
    }

    onSetApp(url) {
        this.props.onSetApp(url);
        this.setState({ expanded: false });
    }

    onScroll() {
        this.props.onScroll({ route: this.props.app });
    }

    expandCollapse() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        let pathname = '';

        if (typeof window !== 'undefined') {
            pathname = window.location.pathname;

            if (pathname === '/admin' || pathname === '/statistics') { return null; }
        }

        const { app, onSetApp, subApp } = this.props;

        const currentRoute = ROUTES[this.props.app];

        const isSmall = pathname === '/reformed-church-finder' || pathname.indexOf('/answers-database') !== -1 || subApp.indexOf('/interactive-theology/') !== -1;

        const rootClassNames = css('menu', {
            'menu--small': isSmall,
            'menu--expanded': this.state.expanded
        });

        const overlayClassNames = css('menu__overlay', {
            'menu__overlay--show': this.state.expanded
        });

        const classNames = css('menu__options', {
            'menu__options--expanded': this.state.expanded
        });

        const numberOfItems = Object.keys(ROUTES).length - 1;
        let height = this.state.expanded ? isSmall ? numberOfItems * 32 : numberOfItems * 70 : 0;

        if (pathname === '/reformed-church-finder' && this.state.expanded) {
            height = numberOfItems * 32;
        }

        return (
            <div className={rootClassNames}>
                <div className={overlayClassNames} onClick={() => this.setState({ expanded: false })} style={{ top: isSmall ? 30 : 70 }} />
                {
                    app === '/interactive-theology' && subApp
                        ? (
                            <div onClick={this.expandCollapse}>
                                <div className="menu__option menu__option--selected">
                                    <div className="menu__icon">
                                        <i className={`fa fa-${currentRoute.icon}`} />
                                    </div>
                                    <div className="menu__text">
                                        <h1>{GAMES[subApp].name}</h1>
                                    </div>
                                    <i className="fa fa-chevron-down" />
                                </div>
                            </div>
                        )
                        : (
                            <Link to={currentRoute.url} onClick={this.expandCollapse}>
                                <div className="menu__option menu__option--selected">
                                    <div className="menu__icon">
                                        <i className={`fa fa-${currentRoute.icon}`} />
                                    </div>
                                    {currentRoute.text}
                                    <i className="fa fa-chevron-down" />
                                </div>
                            </Link>
                        )
                }
                <div className={classNames} style={{ height }}>
                    {
                        map(ROUTES, (value, key) => {
                            if (key === this.props.app && (!this.props.subApp || this.props.subApp.indexOf('/answers-database/') !== -1)) {
                                return null;
                            }

                            return (
                                <Link key={key} to={value.url} onClick={partial(this.onSetApp, value.url)}>
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
    onSetApp: setApp,
    onSetSubApp: setSubApp
};

export default connect(mapStateToProps, mapActionsToProps)(Menu);
