let h1 = document.getElementsByTagName("h1")[0];
console.log(h1);

let article = document.getElementsByTagName('article')[0];
console.log(article);
let h2 = article.lastElementChild;
console.log(h2);
article.removeChild(h2);

let h2HTML = document.getElementsByTagName('h2')[0];
console.log("🚀 ~ file: exercise1.js:11 ~ h2HTML:", h2HTML)
let h3 = document.getElementsByTagName('h3')[0];
console.log("🚀 ~ file: exercise1.js:11 ~ h3:", h3)


h2HTML.addEventListener("click",backgroundToRed);

function backgroundToRed(e){
    e.target.style.background ='red';
}

let h4 = document.getElementsByTagName('h4')[0];

h3.addEventListener("click",hideTheElement);
function hideTheElement(e){
    e.target.style.display = 'none';
}

// !!! eyni eventi tek elemente verdikde eventler arasinda konflikt yaranir 
// !!! meselen click eventi iki funksiyani eyni element uzerinde gore bilmez sonuncu event ise dusecek