# Front-end dev — practical exercise

Instructions for installing and running the local development server.
Use this server to build the work-in-progress PxlPro website.

## Prerequisites

You'll need to have [Node v8+](https://nodejs.org/download) installed.

## Installing the server dependencies

Do this one to install the required modules to run your local [Hapi](https://hapijs.com/) server.

```
npm install
```

---

## Developing / Running the server

```
npm run dev
```

This will build the initial SCSS files to CSS, setup a watch, browser-sync and start the [Hapi](https://hapijs.com/) server.

### Assets

You'll need to build out the template and create the CSS.

- Find `templates` in `./server/templates`
- `CSS` is generated from a built-in build script that compiles any created [SCSS](https://sass-lang.com/) files in `./public/scss`
- A single JavaScript file can be found in `./public/js` this is available to use but has no build step.

If you'd like to refactor the project you're welcome to.

### Browser-sync

To help with authoring, the [browser-sync](https://www.browsersync.io/) tool has been integrated to the dev server to provide automatic updates as you change HTML, CSS, images etc.
