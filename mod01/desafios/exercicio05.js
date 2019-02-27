// 5.1 REST
const arr = [1, 2, 3, 4, 5, 6];

const getX = (a, ...params) => a;
let x = getX(1, 2, 3, 4, 5, 6);
console.log(x); // 1

const getY = (a, ...params) => params;
let y = getY(1, 2, 3, 4, 5, 6);
console.log(y); // [2, 3, 4, 5, 6]

const soma = (...params) => params.reduce((total, next) => total + next);
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

// 5.2 SPREAD
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil'
    }
};

const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = {
    ...usuario,
    endereco: {
        cidade: 'Lontras',
        uf: usuario.endereco.uf,
        pais: usuario.endereco.pais
    }
};
console.log(usuario);
console.log(usuario2);
console.log(usuario3);
