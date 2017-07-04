import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Admin from 'app/components/Admin';
import Home from 'app/components/Home';
import Menu from 'app/components/Menu';
import Salvation from 'app/components/Salvation';
import Bible from 'app/components/Bible';
import Predestination from 'app/components/Predestination';
import RepentBelieve from 'app/components/RepentBelieve';

class App extends Component {
    render() {
        const Component = typeof window === 'undefined' ? 'div' : BrowserRouter;

        return (
            <Component>
                <MuiThemeProvider>
                    <div>
                        <Menu />
                        <Route exact path="/" component={Home}/>
                        <Route path="/repent-believe" component={RepentBelieve} />
                        <Route path="/admin" component={Admin} />
                    </div>
                </MuiThemeProvider>
            </Component>
        );
    }
}

export default App;
