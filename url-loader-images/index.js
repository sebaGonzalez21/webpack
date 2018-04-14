import './estilos.css'
import platziImg from './platzi.png'
import { firstMessage, delayedMessage } from './message.js'
document.write(firstMessage)
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src',platziImg);
img.setAttribute('width',50);
img.setAttribute('height',50);
document.body.append(img);
//console.log('Hola mundo desde webpack');
console.log(firstMessage);
