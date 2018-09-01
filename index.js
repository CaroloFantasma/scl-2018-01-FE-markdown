#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Marked = require('marked');
const fetch = require('node-fetch');
const mdLinks = require('./md.js');
const [,, ...args] = process.argv;
const file = args[0];
const relativeToAbsolute = path.resolve(file);

mdLinks(relativeToAbsolute);
