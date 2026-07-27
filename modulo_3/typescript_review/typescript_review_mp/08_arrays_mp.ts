
const idLibros: number[] = [1, 2, 3, 4, 5];
const categorias: Array<string> = ["a", "b", "c"];


const copiasInferidas = [10, 20, 30];

console.log(`Arreglo ID Libros: ${idLibros}`)
console.log(`Arreglo de Categorías ${categorias}`)
console.log(`Arreglo Copias Inferidas: ${copiasInferidas}`)  

const dobles: number[] = idLibros.map((n) => n * 2);
const pares: number[] = idLibros.filter((n) => n % 2 === 0);
const suma: number = idLibros.reduce((acc, n) => acc + n, 0);
console.log(`Dobles ID: ${dobles}`)
console.log(`Pares ID: ${pares}`)
console.log(`Suma IDs: ${suma}`)


idLibros.push(6);
console.log(`Arreglo ID Libros: ${idLibros}`)      
idLibros.unshift(0);
console.log(`Arreglo ID Libros: ${idLibros}`) 
const ultimo = idLibros.pop();
console.log(`Arreglo ID Libros: ${idLibros}`) 
const primero = idLibros.shift();
console.log(`Arreglo ID Libros: ${idLibros}`) 


const existe: boolean = idLibros.includes(3);
console.log(`Existe libro 3: ${existe}`) 
const indice: number = idLibros.indexOf(3);
console.log(`Posicion de libro 3: ${indice}`)
const encontrado: number | undefined = idLibros.find((n) => n > 4);
console.log(`ID encontrado mayor a 4: ${encontrado}`)