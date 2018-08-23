let fs = require('fs');
let path = require('path');

let pathSupplied = process.argv[2];
let extensionFilter = md;

function extension(element) {
  let extName = path.extname(element);
  return extName === '.' + extensionFilter; // busca esa extensión del archivo
};

fs.readdir(pathSupplied, function(err, list) {
  list.filter(extension).forEach(function(value) {
    console.log(value);
  });
});

