
let body = document.getElementsByTagName("body")[0];
let color_blocks = document.querySelectorAll("#contanier > *");
let fill_blocks = document.querySelectorAll("#box > *");
let clear_button = document.getElementsByTagName("button")[0];

clear_button.addEventListener("click", function(){
    for (fill_block of fill_blocks){
        fill_block.style.backgroundColor = "white";
    }
});

body.addEventListener("mousedown", function(){
    mousedown = true;
})

body.addEventListener("mouseup", function(){
    mousedown = false;
})


for (color_block of color_blocks){
    color_block.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    });
}
