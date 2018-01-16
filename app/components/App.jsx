import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SiteMap from 'app/components/SiteMap';
import Admin from 'app/components/Admin';
import Statistics from 'app/components/Statistics';
import Home from 'app/components/Home';
import Menu from 'app/components/Menu';
import Gospel from 'app/components/Gospel';
import CatechismCorner from 'app/components/CatechismCorner';
import AnswersDatabase from 'app/components/AnswersDatabase';
import AnswersSelection from 'app/components/AnswersDatabase/AnswersSelection';
import InteractiveTheology from 'app/components/InteractiveTheology';
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
                        <Route path="/repent-believe" component={Gospel} />
                        <Route path="/catechism-corner" component={CatechismCorner} />
                        <Route path="/answers-database/*" component={AnswersSelection} />
                        <Route exact path="/answers-database" component={AnswersDatabase} />
                        <Route path="/interactive-theology" component={InteractiveTheology} />
                        <Route path="/admin" component={Admin} />
                        <Route path="/statistics" component={Statistics} />
                        <Route path="/sitemap" component={SiteMap} />
                    </div>
                </MuiThemeProvider>
            </Component>
        );
    }
}

export default App;
