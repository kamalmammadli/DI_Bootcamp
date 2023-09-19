let words = prompt("Some text");
let arrayOfWords = words.split(" ");
let arrayOfWords2 = words.split(" ");

let ranking = arrayOfWords.sort(function(a, b) { return b.length - a.length })

let check = "";
let space = 0;
let checkLeft = " ";
let lastelement = arrayOfWords.length - 1;
for (let j = 0; j <= ranking[0].length; j++) {
    check += " * ";

}
console.log(check)

for (let i = 0; i < arrayOfWords.length; i++) {
    space = check.length - arrayOfWords2[i].length;
    for (let y = 0; y < space; y++) {

        checkLeft += " "
    }

    console.log(`* ${arrayOfWords2[i]}${checkLeft} *`)
    checkLeft = " ";

}




console.log(check)