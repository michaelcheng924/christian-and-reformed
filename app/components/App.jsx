import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { toggleDrawer } from 'app/actions/AppActions';
import Nav from 'app/components/Nav';
import Home from 'app/components/Home';
import VideoAudio from 'app/components/VideoAudio';
import ChurchFinder from 'app/components/ChurchFinder';
import ConfessionsCreeds from 'app/components/ConfessionsCreeds';
import LondonBaptistConfession from 'app/components/ConfessionsCreeds/london-baptist';
import CatechismTraining from 'app/components/CatechismTraining';

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
                        <Route path="/video-audio" component={VideoAudio}/>
                        <Route path="/reformed-church-finder" component={ChurchFinder}/>
                        <Route path="/confessions-creeds" component={ConfessionsCreeds}/>
                        <Route path="/1689-london-baptist-confession" component={LondonBaptistConfession}/>
                        <Route path="/catechism-training" component={CatechismTraining}/>
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
