![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 20 | Q Logger

### Author: Joseph Wolfe

### Links and Resources
* [GitHub](https://github.com/charmedsatyr-401-advanced-javascript/q-logger)
* [![Build Status](https://github.com/charmedsatyr-401-advanced-javascript/q-logger.svg?branch=master)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/q-logger)
* [Back End](http://q-logger-cs.azurewebsites.net)

#### Documentation
See [Simple Node Message Queue (@nmq)](https://www.npmjs.com/package/@nmq/q)

### Modules
#### `logger.js`
* Subscribes to and logs `save` and `error` events in the `files` namespace.
* Subscribes to and logs `create`, `read`, `update`, `delete`, and `error` events in the `database` namespace.

### Setup
#### `.env` requirements
* `Q_SERVER` - The complete url and port to which the logger should connect to find the server

#### Running the app
* `npm start`

#### Tests
N/A

#### UML
N/A
