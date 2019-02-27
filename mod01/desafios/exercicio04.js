// 4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
};

const {
    nome,
    endereco: { cidade },
    endereco: { estado }
} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2
const usuario = {
    nomeU: 'Diego',
    idade: 23
};

function mostraInfo({ nomeU, idade }) {
    console.log(`${nomeU} tem ${idade} anos.`);
}
mostraInfo(usuario);
