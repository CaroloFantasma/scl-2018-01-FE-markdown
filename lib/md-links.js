#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const Marked = require('marked');
const fetch = require('node-fetch');
const colors = require('colors');

// function validateFileExtension(path) {
//   if (path.extname(file).toLowerCase() !== '.md') {
//     console.log('Archivo no válido, debe tener extensión .md');
//     return false;
//   } else {
//     return true;
//   };
// };

//  The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
// function relativeToAbsolute(path) {
//   const readPath = (path.join(process.cwd()));
//   if (path === '') {
//     console.log(error + 'Por favor, ingrese una ruta válida');
//   };
// };

// function readFilePromise(path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, 'utf-8', (error, data) => {
//       if (error) {
//         return reject(error);
//       }
//       return resolve(data);
//       let dataLine = data.split('\n');    
//     });
//   }); 
// };


mdLinks = function markdownLinkExtractor(markdown) {
  // Función necesaria para extraer los links usando marked
  // Recibe texto en markdown y retorna sus links en un arreglo
  const links = [];

  const renderer = new Marked.Renderer();

  // Taken from https://github.com/markedjs/marked/issues/1279
  const linkWithImageSizeSupport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;

  Marked.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;

  renderer.link = function(href, title, text, line) {
    links.push({
      href: href,
      text: text,
      title: title
    });
  };
  renderer.image = function(href, title, text, line) {
    // Remove image size at the end, e.g. ' =20%x50'
    href = href.replace(/ =\d*%?x\d*%?$/, '');
    links.push({
      href: href,
      text: text,
      title: title,
    });
  };
  Marked(markdown, {renderer: renderer});
  return links;
};

// function LinksValidation(links) {
//   links.forEach(element => {
//     let url = element.href;
//     fetch(url).then(response => response
//     ).then(data => {
//       // console.log(data.url);
//       // console.log(data.status);
//     }).catch(error => {
//       console.error('ERROR > ' + error.status);
//     });
//   });
// }
module.exports = mdLinks;