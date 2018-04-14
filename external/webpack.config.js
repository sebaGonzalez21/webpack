const path = require('path');


/*
configuracion completa correr en webpack config y generar dento de la carpeta, respetar comas
*/
module.exports = {
  entry: path.resolve(__dirname,'index.js'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  }
}
