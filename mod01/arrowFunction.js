const arr = [1, 2, 3, 5, 7, 10];

const newArray = arr.map((item, index) => '[' + index + '] => ' + item);

console.log('Função map: ', newArray);
