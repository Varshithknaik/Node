const { parentPort } = require('worker_threads');
 
parentPort.on('message', (message) => {

  let counter = 0;
  while (counter < 1e5) {
    
    counter++;
  }
  console.log(message);
 
  parentPort.postMessage('df' + counter);
});