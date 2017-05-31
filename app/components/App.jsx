import $ from 'jquery';
import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import css from 'classnames';
import { partial } from 'lodash';
import { createSelector } from 'reselect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentForward from 'material-ui/svg-icons/content/forward';

import { APP_LIST, DEFAULT_TITLE, ROUTES } from 'app/constants/routes';
import { getAppData } from 'app/api/users';
import { setApp } from 'app/actions/AppActions';
import Header from 'app/components/Header';
import Home from 'app/components/Home';
import Admin from 'app/components/Admin';

class App extends Component {
    componentWillMount() {
        if (typeof window !== 'undefined') {
            const pathname = window.location.pathname;
            if (pathname !== '/') {
                this.props.onSetApp(pathname);
            }

            this.props.onGetAppData();
        }

        this.state = {
            show: false
        };
    }

    componentDidMount() {
        this.setState({ show: true });
    }

    componentDidUpdate(prevProps) {
        const { app } = this.props;

        if (!app && prevProps.app) {
            $('body').scrollTop(0);
        }

        if (app !== prevProps.app && typeof window !== 'undefined') {
            this.setTitle();
        }
    }

    setTitle() {
        const { app } = this.props;

        if (ROUTES[app]) {
            document.title = ROUTES[app].windowTitle;

            if (ROUTES[app].background) {
                document.body.style.background = ROUTES[app].background;
            }
        } else {
            document.title = DEFAULT_TITLE;
        }
    }

    renderBack() {
        if (!this.props.app) { return null; }

        return (
            <Link to="/" onClick={partial(this.props.onSetApp, null)}>
                <FloatingActionButton className="app__back-button" mini={true} secondary={true}>
                    <ContentForward />
                </FloatingActionButton>
            </Link>
        );
    }

    render() {
        const { app, onSetApp } = this.props;

        const Component = typeof window === 'undefined' ? 'div' : BrowserRouter;

        const classNames = css('root', {
            'root--show': this.state.show
        });

        return (
            <Component>
                <MuiThemeProvider>
                    <div className={classNames}>
                        <Header app={app} onSetApp={onSetApp} />
                        <Route exact path="/" component={Home}/>
                        <Route path="/admin" component={Admin} />
                        {
                            APP_LIST.map(item => {
                                return <Route key={item.url} path={item.url} component={item.component}/>
                            })
                        }
                        {this.renderBack()}
                    </div>
                </MuiThemeProvider>
            </Component>
        );
    }
}

const mapStateToProps = createSelector(
    state => state.app,
    app => ({ ...app })
);

const mapActionsToProps = {
    onGetAppData: getAppData,
    onSetApp: setApp
};

export default connect(mapStateToProps, mapActionsToProps)(App);
