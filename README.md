# React Isomorphic
Intended for static sites and web applications that also need server-side rendering.
Around 57.5KB Compressed JS.

This automatically renders exactly the same React markup between client and server without config.

## Getting Started
**This will get you all setup and running 🚀**
```
git clone https://github.com/kyle-ssg/react-isomorphic.git && cd react-isomorphic && rm -rf .git && git init && npm install && npm start
```

### Run Dev - Run hot reloading node server
```
$ npm start
```

### Run Prod - Build, deploy, minify, cachebust and run production node server
```
$ npm run prod
```

### New Pages
Simply add a route to ```routes.js```. Wrap pages in ```DocumentTitle``` elements and a ```div``` child. 

*DocumentTitle elements allow you to manage the title of your page, it gets interpreted both on the server and client for seo purposes.*

If you wish the page to be completely static (Unlikely) you will need to add an entry to ```pages.js``` and add a corresponding handlebars template.


### Images/fonts etc
/fonts and /images always get deployed, if you wish to add more static folders you'll need to edit ```plugins.js```.

Static files are always served at the root, this means you just have to do ```<img src='/images/yourfile.png/>``` and ```background-image:url('/images/yourfile.png')```.

### Dev Notes
- In dev mode the css is rendered in the body meaning you will see a flicker while it gets interpreted, this is for performance and doesn't happen in production.
- In dev mode you may get a warning about the server/client markup being out of sync, this error can be ignored as it is just a knockon affect from hot reloading.
