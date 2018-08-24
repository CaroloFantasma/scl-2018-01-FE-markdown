#!/usr/bin/env node

let fs = require('fs');
let path = require('path');

// Leer archivo
fs.readFile('README.md', 'utf8', (err, data) => { 
  if (err) throw err;
  console.log(data);
});