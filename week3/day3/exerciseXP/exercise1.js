let div = document.getElementById('container');
let btn = document.getElementById('clear');
let a = setInterval(function(){
    p = document.createElement('p');
    p.innerHTML = 'Hello World';
    console.log(p);
    div.appendChild(p);
  },2000);
  console.log(a);
  btn.addEventListener('click', function(){
    clearInterval(a);
    
  })