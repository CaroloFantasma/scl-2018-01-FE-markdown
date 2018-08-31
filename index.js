#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Marked = require('marked');
const fetch = require('node-fetch');
const mdLinks = require('./md.js');
const [,, ...args] = process.argv;

mdLinks();
