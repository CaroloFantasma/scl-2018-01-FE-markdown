#!/usr/bin/env node

let fs = require('fs');
let path = require('path');

//  Ruta actual del directorio (Current Working Directory)
let currentDirectory = process.cwd();
console.log(`Current working directory: ${process.cwd()}`);
let cwdToString = Buffer.from(currentDirectory);

fs.readdir(cwdToString, (error, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

// Leer archivo
// fs.readFile(file, 'utf8', (err, data) => { 
//   if (err) throw err;
//   console.log(data);
// });

// // Selecciona los archivos con extensión .md
// for (let i in files) {
//   if (path.extname(files[i]) === '.md') {
//   }
// }