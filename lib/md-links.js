#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const Marked = require('marked');
const fetch = require('node-fetch');
const colors = require('colors');

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

// Ruta actual del directorio (Current Working Directory)
let currentDirectory = process.cwd();
let cwdToString = Buffer.from(currentDirectory);
console.log(`Current working directory: ${process.cwd()}`.magenta);

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
          mdLinks(data).forEach(element => {
            console.log('Archivo:' + file.cyan, 'Link:' + element.href.green, 'Texto:' + element.text.blue);
            fetch(`${element.href}`, {validate: true}).then((response) => {
              console.log(response.url.magenta, response.status, response.statusText.red);
            });
          });
        };
      });
    }
  });
});

module.exports = mdLinks;