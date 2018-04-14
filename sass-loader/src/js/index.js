import '../css/estilos.css'
import platziImg from '../images/platzi.png'
import { firstMessage, delayedMessage } from './messages.js'
import data from './teachers.json'
import renderToDom from './render-to-dom.js'
import React from 'react'
import {render} from 'react-dom'
import Teachers from './components/teachers.js'

render(<Teachers data={data}/>,document.getElementById('container'))


console.log(data);


data.teachers.forEach((teacher) =>{
  const element = document.createElement('li');
  element.textContent = teacher.name;
  renderToDom(element)
})

document.write(firstMessage)
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src',platziImg);
img.setAttribute('width',50);
img.setAttribute('height',50);
document.body.append(img);
console.log('Hola mundo desde webpack');
