import {renderToString} from 'react-dom/server'
import React from 'react'
import {match, RouterContext} from 'react-router'
import routes from '../src/routes'
import express from 'express';
import exphbs from 'express-handlebars';
import spm from './middleware/single-page-middleware';
import webpackMiddleware from './middleware/webpack-middleware';
import DocumentTitle from 'react-document-title';

const isDev = process.env.NODE_ENV !== 'production';
const app = express();


if (isDev) { //Hot reloading
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
    match({ routes, location: req.url },
        (err, redirectLocation, renderProps) => {

            // in case of error display the error message
            if (err) {
                return res.status(500).send(err.message);
            }

            // generate the React markup for the current route
            let markup;
            if (renderProps) {
                // if the current route matched we have renderProps
                markup = renderToString(<RouterContext {...renderProps}/>);
            } else {
                // otherwise we can render a 404 page
                markup = renderToString(<NotFoundPage/>);
                res.status(404);
            }

            // render the index template with the embedded React markup and set document title
            return res.render('index', { markup, isDev, title: DocumentTitle.rewind(), layout: false });
        }
    );
});

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});