const path = require('path');


/*
configuracion completa correr en webpack config y generar dento de la carpeta, respetar comas
*/
module.exports = {
  entry: path.resolve(__dirname,'index.js'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  devServer:{
    port:9000
  },
  //se cargan los key del css
  module: {
    rules:[
      //aqui van los loader ayudan a soportar los multilples archivos
      {
        //que tipo de archivo quiero reconocer
        test: /\.css$/,
        //que loader se va a encargar del archivo, se deben instalar en webpack, utilizar array mas de un loader que
        //carga el fondo de la pantalla
        use: ['style-loader','css-loader']
      }
    ]
  }
}
