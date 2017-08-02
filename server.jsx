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
import { ROUTES } from 'app/components/Menu';
import { ANSWERS_DATABASE_MAP } from 'app/components/AnswersDatabase/constants';
import { GAMES } from 'app/components/InteractiveTheology';

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

    const place = ROUTES[req.path] || ANSWERS_DATABASE_MAP[req.path] || GAMES[req.path];

    const title = place ? `${place.title} - Christian and Reformed App` : 'Christian and Reformed App';
    const description = place ? place.description || '' : 'Proclaiming Historic, Timeless Truth';
    const image = place ? place.image || 'http://app.christianandreformed.com/fb-pic.png' : 'http://app.christianandreformed.com/fb-pic.png';

    const HTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">

                <meta property="og:type" content="website" />
                <meta property="og:title" content="${title}" />
                <meta property="og:description" content="${description}" />
                <meta property="og:image" content="${image}" />

                <title>Christian and Reformed: Proclaiming Historic, Timeless Truth</title>

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
                      appId      : '477351322618211',
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

                   (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
                     v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
                     o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
                     y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/e50bcefb-9d40-4b17-4693-2ac3cbd24e4b/pendo.js';
                     z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

                     // Call this whenever information about your visitors becomes available
                     // Please use Strings, Numbers, or Bools for value types.
                     pendo.initialize({
                       apiKey: 'e50bcefb-9d40-4b17-4693-2ac3cbd24e4b',

                       visitor: {
                         id:              'VISITOR-UNIQUE-ID'   // Required if user is logged in
                         // email:        // Optional
                         // role:         // Optional

                         // You can add any additional visitor level key-values here,
                         // as long as it's not one of the above reserved names.
                       },

                       account: {
                         // id:           'ACCOUNT-UNIQUE-ID' // Highly recommended
                         // name:         // Optional
                         // planLevel:    // Optional
                         // planPrice:    // Optional
                         // creationDate: // Optional

                         // You can add any additional account level key-values here,
                         // as long as it's not one of the above reserved names.
                       }
                     });

                       (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                       (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                       })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                       ga('create', 'UA-99920759-1', 'auto');
                       ga('send', 'pageview');
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
