#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
const mdLinks = require('./lib/md-links');


let dirPath = process.argv[2];
let dirBuf = Buffer.from(dirPath);
let fileType = '.' + process.argv[3]; // Extensión del archivo
let files = [];
fs.readdir(dirBuf, function(err, list) {
  if (err) throw err;
  for (let i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === fileType) {
      console.log(list[i]); // imprime el archivo
      files.push(list[i]); // almacena el nombre del archivo dentro de un arreglo de archivos
    }
  }
});