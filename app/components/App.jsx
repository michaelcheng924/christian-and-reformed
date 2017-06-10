import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from 'app/components/Home';
import Menu from 'app/components/Menu';
import Salvation from 'app/components/Salvation';

class App extends Component {
    render() {
        const Component = typeof window === 'undefined' ? 'div' : BrowserRouter;

        return (
            <Component>
                <MuiThemeProvider>
                    <div>
                        <Menu />
                        <Route exact path="/" component={Home}/>
                        <Route path="/salvation" component={Salvation} />
                    </div>
                </MuiThemeProvider>
            </Component>
        );
    }
}

export default App;
