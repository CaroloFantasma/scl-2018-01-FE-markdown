#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Marked = require('marked');
const fetch = require('node-fetch');
const colors = require('colors');
const linksMd = require('./lib/md-links');
const [, , ...args] = process.argv;
const options = require('./index');

// mdLinks.validateFile(args[0]);
let currentDirectory = process.cwd();
let cwdToString = Buffer.from(currentDirectory);
console.log(`Current working directory: ${process.cwd()}`.magenta);

// Ruta actual del directorio (Current Working Directory)
const mdLinks = function fileReadingPromise() {
  fs.readdir(cwdToString, (error, files) => {
    let currentDirectory = process.cwd();
    let cwdToString = Buffer.from(currentDirectory);
    options.validate = process.argv[2];
    console.log(`Current working directory: ${process.cwd()}`.magenta);
    console.log('process.argv:' + JSON.stringify(process.argv));


    //  Lee los contenidos del directorio
    fs.readdir(cwdToString, (error, files) => {
      // Selecciona los archivos con extensión .md
      files.forEach(file => {
        if (path.extname(file).toLowerCase() === '.md') {
          // Leer contenido del archivo
          fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
              console.log(error);
            } else {
              let getLine = (data).split('\n').map((element, index) => linksMd(element, index + 1));
              getLineNumber = getLine.filter(element => element.length !== 0);
              let lineNumber = getLineNumber.reduce((firstValue, secondValue) => firstValue.concat(secondValue));
              lineNumber.forEach(element => {
                if (options.validate === '--validate') {
                  fetch(`${element.href}`).then((response) => {
                    console.log(response.url.magenta, response.status, response.statusText.red);
                  }).catch((err) => {
                    console.error('link no encontrado ' + err);
                  });
                } else {
                  console.log('Archivo:' + file.cyan, 'Link:' + element.href.green, 'Texto:' + element.text.blue);
                };
              });
            };
          });
        };
      });
    });
  });
};

module.exports = mdLinks;
