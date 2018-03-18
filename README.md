# Bowling Challenge

## Game Description

You can see it running on http://pfermena.github.io/bowling-challenge

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I used create-react-app since it's my first time using the library and I couldn't afford creating the dev pipeline myself in terms of time. It seems though that for small-mid size projects it's the bootstrap of choice.

It has included several tools to enable the modern DEV workflow (of course I understand that all this tooling should be properly known and used to get the most out of it, but create-react-app was powerful and flexible enough for the sake of the test):

* Webpack
* Babel
* Jest

* React, JSX, ES6, and Flow syntax support.
* Language extras beyond ES6 like the object spread operator.
* Autoprefixed CSS, so you don’t need -webkit- or other prefixes.
* A fast interactive unit test runner with built-in support for coverage reporting.
* A live development server that warns about common mistakes.
* A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
* An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria.

#

Here you have detailed the thigs I've done with some comments for some of them.

Bowling Challenge

* [x] Please create a repository in GitHub (or similar) so that we can follow your progress.

* [x] The implementation should use ES2015 and the modern dev workflow.

* [x] Bonus points for Unit testing your code.

## Comments

The test runner included is Jest. I've created actual tests for the BowlingEngine class.

I had no more time to test other business classes, although I know it should be mandatory more in a system that has to verify a lot of rules.

I've been reading how to test react components with the tools Jest provide or using ezyme but at the end I didn't have time to dive into it.

#

* [x] Remember that we are more interested how you approach this problem than completing all the features (if you don't have enough time explain how you would progress).

Minimum (keep in mind the optional requirements):

* [x] Implement a scoring system for a bowling game according to these rules:
* A game consists of 10 frames.
* In general each frame has 2 rolls.
* In general a player scores the number of pins knocked down.
* If the player knocks down all 10 pins on the first roll it’s a strike. The player scores 10 plus the number of pins knocked down in the next two rolls.
* If the player knocks down all 10 pins in two rolls it’s a spare. The player scores 10 plus the number of pins knocked down in the next roll.

- [x] A decent visualisation of the game. Be creative here :)

## Comments

I've created a simple score board that serves as layout of the scoring, it's really simple but there you can identify properly what happened with the game.

There are two different options to run the game. 
- Autoplay, you see how the game progresses.
- Manual mode, you roll the ball each time

Something I'd wanted to include is a visualization of how many and which pins are hit on every roll.


#

Bonus:

* [x] Add support for the last frame in the game:
* The player gets additional rolls in the last frame: one additional for a spare after the second roll or two extra rolls for a strike.

- [x] Create a method that randomly throws a roll (one roll is 1-10 pins knocked down), and progresses the scoring.
- [x] Support multiple players.

## Comments

Adding support for multiple players should not be hard

#

* [x] Or anything fun you can think of :)

## Comments

I've included subtle animations every time you score a strike, a spare or a gutter (maybe a gutter it's not scoring at all...).

I was thinking on including some cheat codes to force the perfect game. Again no time for it :(

#

## Table of Contents (from react-create-app. Interesting for the app)

* [Folder Structure](#folder-structure)
* [Available Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm test](#npm-test)
  * [npm run build](#npm-run-build)
  * [npm run eject](#npm-run-eject)
* [Game Description](#game-description)

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
