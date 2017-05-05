import React, { createClass } from 'react';
import css from 'classnames';
import { Link } from 'react-router';
import { noop,  partial } from 'lodash';
import { APP_CARDS } from 'app/constants/home';
import Login from 'app/components/Login';

const App = createClass({
    displayName: 'App',

    getInitialState() {
        return {
            location: '/',
            mode: 'login',
            showLogin: false
        };
    },

    componentWillMount() {
        if (typeof window !== 'undefined') {
            const location = window.location.pathname;
            
            if (location !== '/') {
                this.setState({ location });
            }
        }
    },

    setParentState(object) {
        this.setState(object);
    },

    setLocation(location) {
        this.setState({ location });
    },

    showLogin() {
        this.setState({ showLogin: true });
    },

    renderLinks() {
        return APP_CARDS.map(card => {
            const linkClassNames = css('mdl-navigation__link', {
                'mdl-navigation__link--active': this.state.location === card.url
            });

            return (
                <Link key={card.title} to={card.url}>
                    <div className={linkClassNames} onClick={partial(this.setLocation, card.url)}>{card.shortTitle}</div>
                </Link>
            );
        });
    },

    renderLogin() {
        const { mode, showLogin } = this.state;

        if (!showLogin) { return null; }

        return <Login mode={mode} setParentState={this.setParentState} />;
    },

    render() {
        const { showLogin } = this.state;

        const homeClassNames = css('mdl-navigation__link', {
            'mdl-navigation__link--active': this.state.location === '/'
        });

        return (
            <div>
                {this.renderLogin()}
                <div className="main-nav mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <header className="main-nav__header mdl-layout__header">
                        <div className="mdl-layout__header-row">
                            <span className="mdl-layout-title">Reformed Christian Resources</span>
                            <div className="mdl-layout-spacer"></div>
                            <nav className="mdl-navigation mdl-layout--large-screen-only">
                                <Link to="/">
                                    <div className={homeClassNames} onClick={partial(this.setLocation, '/')}>Home</div>
                                </Link>
                                {this.renderLinks()}
                                <a>
                                    <div
                                        className="mdl-navigation__link"  
                                        onClick={showLogin ? noop : this.showLogin}
                                    >
                                        Log In
                                    </div>
                                </a>

                          </nav>
                        </div>
                    </header>
                    <div className="mdl-layout__drawer">
                        <span className="mdl-layout-title">Reformed Christian Resources</span>
                        <nav className="mdl-navigation">
                            <Link to="/">
                                <div className={homeClassNames} onClick={partial(this.setLocation, '/')}>Home</div>
                            </Link>
                            {this.renderLinks()}
                            <a>
                                <div
                                    className="mdl-navigation__link" 
                                    onClick={showLogin ? noop : this.showLogin}
                                >
                                    Log In
                                </div>
                            </a>

                        </nav>
                    </div>
                    <main className="mdl-layout__content">
                        <div className="page-content">
                            {this.props.children}
                        </div>
                    </main>
                </div>
            </div>
        );
    }
});

export default App;
