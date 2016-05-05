[![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)](http://esanalytics.herokuapp.com)

#Stack
* React with Redux (+ thunk middleware), and Immutable.js
* Webpack2 with native modules
* Karma with Mocha for tests
* Heroku deployable (http://esanalytics.herokuapp.com)

#Scenarios
* On the beginning app gets random JSON from features and display correct component
* Module `Toggle` dispatch `setFeature` action, which change current component

##How to run
* Go to http://esanalytics.herokuapp.com and use `Redux DevTools` for Chrome to test Redux
* Download repo -> `npm install` -> `npm start`

## Actions
| Name  | Description |
| ------------- | ------------- |
| getData | uses native fetch() to get random JSON |
| setFeature | change current component - attr: `{ feature: number }`|

#TODO
* Styling - use CSS Modules to style elements
* Tests - write tests for redux, container and toggle component
