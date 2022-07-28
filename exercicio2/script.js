const arrayNum = [7, 78, -30, 23];
const arrayStr = ["papel", "lápis", "borracha", "caneta"];
const arrayMista = ["maçã", 4, false, 75, "banana", true];

console.log(`A arrayNum tem ${arrayNum.length} itens.`);
console.log(`A arrayStr tem ${arrayStr.length} itens.`);
console.log(`A arrayMista tem ${arrayMista.length} itens.`);

console.log('O valores impressos são', arrayNum[0], ',', arrayStr[1], 'e', arrayMista[2]);

console.log('Existe o número 7 na arrayNum?', arrayNum.includes(7));
console.log('Existe a string \"laranja\" na arrayMista?', arrayMista.includes("laranja"));