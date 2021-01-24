'use strict';

//Configure dotenv
require('dotenv').config();

const levelup = require('levelup');
const leveldown = require('leveldown');

const db = levelup(leveldown(process.env.DB_FILEPATH))
