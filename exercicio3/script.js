const arrayNum = [7, 78, -30, 23];
const arrayStr = ["papel", "lápis", "borracha", "caneta"];
const arrayMista = ["maçã", 4, false, 75, "banana", true];

const arrayNumCopia = arrayNum.slice();
console.log('Valores da arrayNumCopia:', arrayNumCopia);

const arrayStrCopia = arrayStr.slice();
console.log('Valores da arrayStrCopia:', arrayStrCopia);

const arrayMistaCopia = arrayMista.slice();
console.log('Valores da arrayMistaCopia:', arrayMistaCopia);

arrayNumCopia.push(6);
console.log('Valores contidos na arrayNum', arrayNum);
console.log('Valores contidos na arrayNumCopia', arrayNumCopia);

arrayStrCopia.pop();
console.log('Valores contidos na arrayStr', arrayStr);
console.log('Valores contidos na arrayStrCopia', arrayStrCopia);

arrayMistaCopia.splice(1, 1);
console.log('Valores contidos na arrayMista', arrayMista);
console.log('Valores contidos na arrayMistaCopia', arrayMistaCopia);