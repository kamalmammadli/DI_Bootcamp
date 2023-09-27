// exercise 1
// İki ədədi parametr kimi qəbul edən və cəmi qaytaran bir sətir funksiyası (yəni ox funksiyası) yaradın.


// const num = (a, b) => a + b;
// console.log(num(4, 5))


// exercise 2
// Kiloqramla çəki alan və onu qramla qaytaran funksiya yaradın. ( İpucu: 1 kq 1000 qr)
// Əvvəlcə funksiya bəyannaməsindən istifadə edin və onu çağırın.
// Sonra funksiya ifadəsindən istifadə edin və onu çağırın.
// Funksiya elanı ilə funksiya ifadəsi arasındakı fərqi bir sətirdə şərh yazın.
// Nəhayət, bir sətirli ox funksiyasından istifadə edin və onu çağırın.

// function kgToGramsDeclaration(weightInKg) {
//     return weightInKg * 1000;}

//     console.log(kgToGramsDeclaration(5));

//     const kgToGramsExpression = function(weightInKg) {
//         return weightInKg * 1000;}
//         console.log(kgToGramsExpression(5)); 

//         const kgToGramsArrow = weightInKg => weightInKg * 1000;
//         console.log(kgToGramsArrow(5));

// exercise3
// (function (numberOfChildren, partnerName, geographicLocation, jobTitle) {
//     console.log(`I have ${numberOfChildren} children.`);
//     console.log(`My partner's name is ${partnerName}.`);
//     console.log(`We live in ${geographicLocation}.`);
//     console.log(`I work as a ${jobTitle}.`);
//   })(3, "Kamal", "Baku", "Devloper");

// (function (numberOfChildren, partnerName, geographicLocation, jobTitle) {

//     const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
  
  
//     const sentenceElement = document.createElement("p");
//     sentenceElement.textContent = sentence;
  

//     document.body.appendChild(sentenceElement);
//   })(3, "Kamal", "Baku", "Devloper");

// !!! EXERCISE 4, 5 TAMAMLANMAYIB