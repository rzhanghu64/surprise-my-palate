'use strict';

//Configure dotenv
require('dotenv').config();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const fs = require('fs');

const fdb_df = require('./fooddb-default.js');

//Check if db exists, clear if so
const clearDB = () => {
  try {
    fs.accessSync(process.env.DB_FILEPATH);
    //Clear it
    fs.rmSync(process.env.DB_FILEPATH);
  } catch (err) {
    //Do nothing
  }
}
clearDB();

//Set up DB
const adapter = new FileSync(process.env.DB_FILEPATH);
const db = low(adapter);

//Finally, let's write the defaults
db.defaults(fdb_df).write();
