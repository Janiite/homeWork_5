const button = document.getElementById('btn');
const conteiner = document.getElementById('box');

button.onclick =  function () { 
  for (i= 0; i <= 30; i++) {
    const par = document.createElement('P');
    document.body.appendChild(par);
    par.innerHTML = 'SARAUJ, LATVIJA!';
    button.innerHTML = 'Atkārtot';
   } 
} ;
