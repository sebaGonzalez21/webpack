import renderToDom from './render-to-dom.js';
import makeMessage from './make-message.js';
const waitTime = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(' Han pasado 3 segundos');
  },3000)
});

module.exports = {
  firstMessage: 'Hola mundo desde un modulo',
  delayedMessage: async () =>{
    const message = await waitTime;
    console.log(message);
    //const element = document.createElement('p')
    //element.textContent = message;
    renderToDom(makeMessage(message));
  },
}
