import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { toggleDrawer } from 'app/actions/AppActions';
import Nav from 'app/components/Nav';
import Home from 'app/components/Home';

class App extends Component {
    render() {
        const { drawerOpen, onToggleDrawer } = this.props;

        return (
            <MuiThemeProvider>
                <div>
                    <Nav onToggleDrawer={onToggleDrawer} />
                    <Route path="/" component={Home}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = createSelector(
    state => state.app,
    app => ({ ...app })
);

const mapActionsToProps = {
    onToggleDrawer: toggleDrawer
};

export default connect(mapStateToProps, mapActionsToProps)(App);
