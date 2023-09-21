let h1 = document.getElementsByTagName("h1")[0];
console.log(h1);

let article = document.getElementsByTagName('article')[0];
console.log(article);
let h2 = article.lastElementChild;
console.log(h2);
article.removeChild(h2);
let h3 = document.getElementsByTagName('h3')[0];
h3.addEventListener("click",backgroundToRed);
function backgroundToRed(e){
    e.target.style.background ='red';
}
let h4 = document.getElementsByTagName('h4')[0];

h3.addEventListener("click",hideTheElement);
function hideTheElement(e){
    e.target.style.display = 'none';
}