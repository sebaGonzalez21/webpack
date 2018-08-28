## Babel

#### Modifica el codigo para las distintas plataformas
Babel loader dara el soporte a los archivos javascript, transpilar el codigo

se iniciar modificando el package.json
```

"build:babel": "webpack-dev-server --config ./babel-loader/webpack.config.js"
```

Añadir las nuevas dependencias en babel

```
Sporte a ecmascript 2015
npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-es2015 babel-preset-es2015

Sporte a ecmascript 2017
npm install --save-dev babel-loader babel-core babel-preset-es2017 babel-preset-es2016 babel-preset-es2016

Sporte a ecmascript 2016
npm install --save-dev babel-loader babel-core babel-preset-es2016 babel-preset-es2016
```
