let div = document.getElementById('container')

console.log(div.textContent)
let div2 = document.querySelector('.list')
let div3 = div2.lastElementChild
console.log(div3)
div3.textContent = 'Richard';
const text = document.querySelectorAll('.list')[1].children[1].remove()
console.log(text)
let text2 = document.querySelectorAll('.list');
console.log(text2)
for(let a of text2){a.firstElementChild.textContent = 'Kamal'}

