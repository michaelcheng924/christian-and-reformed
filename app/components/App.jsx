import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Admin from 'app/components/Admin';
import Statistics from 'app/components/Statistics';
import Home from 'app/components/Home';
import Menu from 'app/components/Menu';
import RepentBelieve from 'app/components/RepentBelieve';
import ChurchFinder from 'app/components/ChurchFinder';

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
                        <Route path="/reformed-church-finder" component={ChurchFinder} />
                        <Route path="/admin" component={Admin} />
                        <Route path="/statistics" component={Statistics} />
                    </div>
                </MuiThemeProvider>
            </Component>
        );
    }
}

export default App;
