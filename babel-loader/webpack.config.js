const path = require('path');
//se asocia al plugin de npm instalado
const extractTextPlugin = require('extract-text-webpack-plugin')

/*
configuracion completa correr en webpack config y generar dento de la carpeta, respetar comas
*/
module.exports = {
  entry: {
    home: path.resolve(__dirname,'index.js')
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  //se cargan los key del css
  module: {
    rules:[

      {
        //que tipo de archivo quiero reconocer
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
      },
      //aqui van los loader ayudan a soportar los multilples archivos
      {
        //que tipo de archivo quiero reconocer
        test: /\.css$/,
        /*
        que loader se va a encargar del archivo, se deben instalar en webpack, utilizar array mas de un loader que
        carga el fondo de la pantalla
        antes del plugin
        use: ['style-loader','css-loader']
        Asociando con el plugin el path require('extract-text-webpack-plugin')
        use: extractTextPlugin.extract({['style-loader','css-loader']}) para extraer los archivos css
        */
        use: extractTextPlugin.extract({
          //['style-loader','css-loader']
          //fallback: 'style-loader',
          //el use: se encarga de interpretar los archivos css
          use: 'css-loader'
        }),
      }
    ]
  },
  plugins:[
    //se insertan los plugins dejar con la coma css/[name].css genera cualquier nombre
    new extractTextPlugin('css/[name].css')
  ]
}
