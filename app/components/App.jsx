import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { toggleDrawer } from 'app/actions/AppActions';
import Nav from 'app/components/Nav';
import Home from 'app/components/Home';
import CatechismTraining from 'app/components/CatechismTraining';
import ChurchFinder from 'app/components/ChurchFinder';

class App extends Component {
    render() {
        const { drawerOpen, onToggleDrawer } = this.props;

        const Component = typeof window === 'undefined' ? 'div' : BrowserRouter;

        return (
            <Component>
                <MuiThemeProvider>
                    <div>
                        <Nav onToggleDrawer={onToggleDrawer} />
                        <Route exact path="/" component={Home}/>
                        <Route path="/catechism-training" component={CatechismTraining}/>
                        <Route path="/reformed-church-finder" component={ChurchFinder}/>
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
    onToggleDrawer: toggleDrawer
};

export default connect(mapStateToProps, mapActionsToProps)(App);
