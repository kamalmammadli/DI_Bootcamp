let sentence = 'My schoolbag is not that bad,i like it.';

let wordNot = [
  sentence.search(16,19)
];

let wordBad = [
  sentence.search(25, 28)
];

// !!! substring metodu hemin indexler arasi hisseni bolub yeni variable menimsedir
// !!! tapsiriqda sene lazim olan hemin sozlerin indexsini elde etmekdir
// !!! indexleri elde etdikden sonra muqayise ederek hansi sozun daha evvelde geldiyini tapmaq olar
// !!! search() metodundan istifade et


let firstpart = sentence.substring(0,16);
let secondpart = sentence.substring(28,39);

console.log(wordNot);
console.log(wordBad);

if (wordNot > wordBad ){
  // !!! meselen burada ['not'] ile ['bad'] muqayise olunur
  // !!! bize ise indexleri muqqayise etmek lazimdir

  console.log(`${firstpart} "good" ${secondpart}`);
} else {
  console.log(sentence);
}