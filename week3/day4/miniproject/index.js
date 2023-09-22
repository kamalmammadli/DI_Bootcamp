
let body = document.getElementsByTagName("body")[0];
let color_blocks = document.querySelectorAll("#contanier > *");
let fill_blocks = document.querySelectorAll("#box > *");
let clear_button = document.getElementsByTagName("button")[0];

clear_button.addEventListener("click", function(){
    for (let fill_block of fill_blocks){  /* !!! let yazilmalidi for loop da yeni variable yaradildigi ucun */
        fill_block.style.backgroundColor = "white";
    }
});

body.addEventListener("mousedown", function(){
    mousedown = true;
})

body.addEventListener("mouseup", function(){
    mousedown = false;
})


for (let color_block of color_blocks){
  /* !!! let yazilmalidi for loop da yeni variable yaradildigi ucun */
  color_block.addEventListener('click', function (event) {
    color = event.target.style.backgroundColor;
  });
}

// STEPS
// Step 1 - reng blocklarina add event listener vermek ; hemin reng blockunun rengini goturmek; onu global variable menimsetmek
// Step 2 - div blocklarina add event listener vermek; mousedown , mouse up , mouse over
// Step 3 - rengleme function yazmaq; event targete background style vermek; value global variable olacaq
// step 4 - div blocklarinda rengleme callback function vermek

// !!! TASK-i TAMAMLA