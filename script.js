let name = prompt('What is your name?');
let nameplace = document.querySelector('#myName');
let clock = document.querySelector('#myClock');
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
setTimeout(() => {
    nameplace.innerHTML = name;
    clock.innerHTML = today.toLocaleDateString("tr-TR", options);
  }, 1000)