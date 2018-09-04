# Proyecto - Markdown-links-finder

Dentro de una comunidad de código abierto, nos han propuesto crear una herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos en formato [Markdown](https://es.wikipedia.org/wiki/Markdown), para verificar los links que contengan y reportar algunas estadísticas.

En respuesta a esta petición nace "Markdown-links-finder", librería de Node.js que permite al usuario, por medio de comandos, leer y analizar archivos con extensión ".md". La finalidad de esta librería es que al revisar una ruta o el nombre de un archivo, recibamos todos los links que se encuentran en el archivo, además del texto incluido y por medio de un nuevo comando, conocemos el estado de estos links, ya que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

## Características generales de "Markdown-links-finder"

*Encuentra (lee) los archivos con extensión ".md".
*Muestra en la terminal todos los links encontrados en el archivo, además de su texto y la ruta.
*Por medio del comando --validate, muestra el estado de los links.

## Instalación

Primero que todo para instalar esta librería debe tener instalado [Node.js](https://nodejs.org/). 

Posteriormente, debe ejecutar los siguientes comandos en la terminal:

### Instalación de dependencias:

##### marked:

* $npm install --save marked

##### node-fetch:

* $ npm install node-fetch --save

##### colors:

* npm install colors

### Instalación de "Markdown-links-finder":

Para implementar esta librería debes ingresar el siguiente comando:

* npm install markdown-links-finder

## Uso

#### Para ejecutar la librería deber usar los siguientes comandos:

`$ md-links <ruta-de-archivo> o $ mdlinks <nombre-de-archivo.md>`

Ejemplo de uso: 

` md-links $C:\Users\CaroloFantasma\Documents\scl-2018-01-FE-markdown\README.md`

` /posicionarse-en-la-ruta-del-archivo/ md-links README.md`

Resultado md-links:

- `href`: URL encontrada.
- `text`: Texto que aparecía dentro del link (`<a>`).
- `file`: Ruta del archivo donde se encontró el link.

`$ md-links <ruta-de-archivo> --validate o $ mdlinks <nombre-de-archivo.md> --validate`

Ejemplo de uso: 

` md-links $C:\Users\CaroloFantasma\Documents\scl-2018-01-FE-markdown\README.md --validate`

` /posicionarse-en-la-ruta-del-archivo/ md-links README.md --validate`

Resultado --validate:

`Ruta:https://www.google.com/ 200 OK`
`Ruta:https://github.com/CaroFantasma 404 Not Found`

## Versión

Markdown-links-finder se encuentra en su versión 1.0.0, que incluye:

- Lectura de archivos ".md"
- Ruta
- Nombre de archivo
- Links
- Texto de links
- Validación de links con --validate

## Documentación utilizada para crear este proyecto:

- [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
- [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Leer un archivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
- [Leer un Directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
- [Path](https://nodejs.org/api/path.html)
- [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)

- [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
- [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
- [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
- [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
- [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
- [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
- [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
- [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)

## Planificación

En lugar de utilizar issues y milestones, se decidió utilizar Trello para planificar este proyecto, puede revisar la planificación en el siguiente link:

[Planificación de Markdown-links-finder](https://trello.com/b/pvkuiubD/markdown-links)

## NPM

[Markdown-links-finder](https://www.npmjs.com/package/markdown-links-finder)

## Autor

`Carolina Lstra Cofré`



