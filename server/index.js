import {renderToString} from 'react-dom/server'
import React from 'react'
import {match, RouterContext} from 'react-router'
import routes from '../src/routes'
import express from 'express';
import exphbs from 'express-handlebars';
import spm from './middleware/single-page-middleware';
import webpackMiddleware from './middleware/webpack-middleware';
import DocumentTitle from 'react-document-title';
import serverRouter from './server-router';
import _ from 'lodash';
const isDev = process.env.NODE_ENV !== 'production';
const app = express();

if (isDev) { //Serve files from src directory and use webpack-dev-server
    console.log('Enabled Webpack Hot Reloading');
    webpackMiddleware(app);

    app.set('views', 'src/');
    app.use(express.static('src'));
} else { //Serve files from build directory
    app.use(express.static('build'));
    app.set('views', 'build/');
}

app.use(spm);
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    match({ routes, location: req.originalUrl },
        (err, redirectLocation, renderProps) => {

            // generate the React markup for the current route. grab any initial data from server-router
            serverRouter(_.last(renderProps.routes), renderProps.params)
                .then((params)=> {
                    let markup;
                    console.log('rendering');
                    try {
                        markup = renderToString(<RouterContext {...renderProps}
                                                               params={Object.assign({}, params, renderProps.params)}/>);
                        return res.render('index', {
                            params: JSON.stringify(params),
                            markup,
                            isDev,
                            title: DocumentTitle.rewind(),
                            layout: false
                        });
                    } catch (e) {
                        console.log(e);
                    }
                });
        }
    );
});

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});