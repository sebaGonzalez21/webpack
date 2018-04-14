import '../css/estilos.css'
import platziImg from '../images/platzi.png'
import { firstMessage, delayedMessage } from './messages.js'
import videoPlatzi from '../video/que-es-core.mp4'

document.write(firstMessage)
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src',platziImg);
img.setAttribute('width',50);
img.setAttribute('height',50);
document.body.append(img);

const video = document.createElement('video');
video.setAttribute('src',videoPlatzi);
video.setAttribute('width',480);
video.setAttribute('autoplay',true);
video.setAttribute('controls',true);
document.body.append(video);

console.log('Hola mundo desde webpack, en un webpack.config');
