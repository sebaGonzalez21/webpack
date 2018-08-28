## Crear un proyecto en npm

Inicializar el proyecto de npm
```

npm-init
```
luego crea el archivo package json con las dependencias

## Instalar packete en package json
guarda este package en package.json y guarda esa dependencia -dev como desarrollo


```

npm install webpack --save-dev
```

```

"devDependencies": {
  "webpack": "4.2.0"
}
```

## Para instalar la versión en especifico

```

npm install webpack@3.8.1 --save-dev
```
guarda esa dependencia de desarrollo en el package json

## Identificar la version de webpack instalada
```

npm list webpack
```

## Procesar Javascript en webpack
Configurar archivo package.json
```

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack index.js bundle.js"
}
```

Ejecutar el contenido de package json
```

npm run build
```
Ejecutar package json externo, crear carpeta external y migrar index.js y webpack.config.js

```

npm run build:local
npm run build:external
```
## Instalar loader que se encargan de manejar css

```

npm install style-loader css-loader --save-dev
```
## correr lo que se creo en webpack.config.js y package json

```

npm run build:css
```

## Instalando plugins en webpack y extraer archivos para utilizar
```

npm install --save-dev extract-text-webpack-plugin
```
