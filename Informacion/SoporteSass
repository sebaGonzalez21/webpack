## Soporte con Sass


Instalacion de sasss
```

npm install -D sass-loader
```
Configurar en webpack-config

```
{
  test: /\.scss$/,
  // use: [
  //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
  //   { loader: "css-loader" }, // interpreta los archivos css en js via import
  // ]
  use: ExtractTextPlugin.extract({
    use: ["css-loader","sass-loader"]
  })
}
```

Configurar en sass el core de node

```

npm install node-sass -D
```

Que se quede esperando los cambios
```

npm run build:sass -- --progress --watch
```

Los preprocesadores se pueden crear variables en los SCSS que pueden ser reutilizados posteriormente
Ejemplo:

```

$borderWith : 2px + 3px;
$padding : $borderWith * 2;
.Teachers{
  border: $borderWith dashed orange;
  background: gray;
  padding: $padding;
}

```
