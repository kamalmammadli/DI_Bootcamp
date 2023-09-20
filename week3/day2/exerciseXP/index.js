// function setTime(){
//     setTimeout(function(){
//         alert("The sales end in 10min ! ");
//     },5000)
// }

// function setTime() {
//     alert( "The sales end in 10min ! ");
// }
// setTimeout(setTime, 5000,)

let a = setInterval(b, 1000);
function b() {
    let a = Text("The sales end in 10min ! ");
    let time = text.toLocaleTimeString();
    document.getElementById("demo").innerHTML = time;
}