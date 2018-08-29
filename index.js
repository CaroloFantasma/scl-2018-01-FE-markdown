#!/usr/bin/env node

const mdLinks = require('./lib/md-links');

// let [,, ...args] = process.argv;

// mdLinks.validateFile(args[0]);

//  Ruta actual del directorio (Current Working Directory)
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
//             console.log(file.cyan, element.href.green, element.text.blue);
//             fetch(`${element.href}`, {validate: true}).then((response) => {
//               console.log(response.url.magenta, response.status.red, response.statusText.red); 
//             });
//           });
//         };
//       });
//     }
//   });
// });

// let lines = fileData.split("\n");
  
