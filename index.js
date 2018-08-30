#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const Marked = require('marked');
const fetch = require('node-fetch');
const colors = require('colors');
const mdLinks = require('./lib/md-links');

// let [,, ...args] = process.argv;

// mdLinks.validateFile(args[0]);

// // Ruta actual del directorio (Current Working Directory)
// let currentDirectory = process.cwd();
// let cwdToString = Buffer.from(currentDirectory);
// console.log(`Current working directory: ${process.cwd()}`.magenta);

// //  Lee los contenidos del directorio
// fs.readdir(cwdToString, (error, files) => {
//   // Selecciona los archivos con extensión .md
//   files.forEach(file => {
//     if (path.extname(file).toLowerCase() === '.md') {
//       // Leer contenido del archivo
//       fs.readFile(file, 'utf8', (err, data) => {
//         if (err) {
//           console.log(error);
//         } else {
//           mdLinks(data).forEach(element => {
//             console.log('Archivo:' + file.cyan, 'Link:' + element.href.green, 'Texto:' + element.text.blue);
//             fetch(`${element.href}`, {validate: true}).then((response) => {
//               console.log(response.url.magenta, response.status, response.statusText.red);
//             });
//           });
//         };
//       });
//     }
//   });
// });

// function readingFile(path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, 'utf-8', (error, data) => {
//       if (error) {
//         return reject(error);
//       }
//     });
//   });
// }

// fs.readFile(file, function(err, contents) {  
//   // fs.readFile(file, 'utf8', callbacalso be used  
//   var lines = contents.toString().spli.length - 1;  
//   console.log(lines);  

