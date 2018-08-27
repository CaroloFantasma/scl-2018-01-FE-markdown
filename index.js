#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
const mdLinks = require('./lib/md-links');
const Marked = require('marked');

//  Ruta actual del directorio (Current Working Directory)
let currentDirectory = process.cwd();
console.log(`Current working directory: ${process.cwd()}`);
let cwdToString = Buffer.from(currentDirectory);

//  Lee los contenidos del directorio
fs.readdir(cwdToString, (error, files) => {
  // Selecciona los archivos con extensión .md
  for (let i in files) {
    if (path.extname(files[i]) === '.md') {

      //  Leer contenido del archivo
      fs.readFile(files[i], 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    }
  }
});

