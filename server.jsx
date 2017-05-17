import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import React from 'react';
import { find } from 'lodash';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import { makeStore } from 'app/helpers';
import serverRoutes from 'app/server/routes';
import App from 'app/components/App';
import { APP_LIST } from 'app/constants/global';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reformedchristianapp');

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
serverRoutes(app);

app.use((req, res) => {
    const store = makeStore();
    const context = {}

    const componentHTML = ReactDOMServer.renderToString(
        <StaticRouter
            location={req.url}
            context={context}
        >
            <Provider store={store}>
                <App/>
            </Provider>
        </StaticRouter>
    );

    const initialState = store.getState();

    const data = find(APP_LIST, app => app.url === req.path);
    const title = data ? data.title : 'Christian and Reformed: Technology Serving Historic Truth';

    const HTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${title}</title>

                <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
                <link rel="icon" 
                      type="image/png" 
                      href="/cross-icon.png">

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

                <link rel="stylesheet" href="/styles.css">

                <script>
                    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
                </script>
            </head>
            <body>
                <script>
                  window.fbAsyncInit = function() {
                    FB.init({
                      appId      : '292276141215622',
                      xfbml      : true,
                      version    : 'v2.9'
                    });
                    FB.AppEvents.logPageView();
                  };

                  (function(d, s, id){
                     var js, fjs = d.getElementsByTagName(s)[0];
                     if (d.getElementById(id)) {return;}
                     js = d.createElement(s); js.id = id;
                     js.src = "//connect.facebook.net/en_US/sdk.js";
                     fjs.parentNode.insertBefore(js, fjs);
                   }(document, 'script', 'facebook-jssdk'));
                </script>

                <div id="app">${componentHTML}</div>

                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBpJ82xY4YxuWoXC04gGWx3lCl8hp7ZTZ4&libraries=places">
                </script>

                <script src="/bundle.js"></script>

            </body>
        </html>
    `;

    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        });
        res.end()
    } else {
        res.write(HTML)
        res.end()
    }
});

export default app;
