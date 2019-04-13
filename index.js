'use strict';

// Environment
require('dotenv').config();

// Import client-side Q
const Q = require('@nmq/q/client');

// Subscribe to events in the `database` namespace
const db = new Q('database');
db.subscribe('create', payload => console.log('create in `db`:', payload));

db.subscribe('read', payload => console.log('read in `db`:', payload));

db.subscribe('update', payload => console.log('update in `db`:', payload));

db.subscribe('delete', payload => console.log('delete in `db`:', payload));

db.subscribe('error', payload => console.log('error in `db`:', payload));

// Subscribe to events in the `files` namespace
const files = new Q('files');
files.subscribe('save', payload => console.log('save in `files`:', payload));
files.subscribe('error', payload => console.log('error in `files`:', payload));

// See all subscriptions
console.log(db.subscriptions());
console.log(files.subscriptions());
