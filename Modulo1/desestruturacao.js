const usuario = {
    nome: 'Renato',
    idade: 31,
    endereco: {
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    }
    
}

//SEM A DESESTRUTURAÇÃO
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade  = usuario.endereco.cidade;
// const estado = usuario.endereco.estado;
// console.log(estado);
// console.log(idade);

//COM A DESESTRUTURAÇÃO

const {nome,idade, endereco : { cidade, estado}}= usuario;

console.log(cidade); // Rio de Janeiro

function mostraNome({nome, idade}) {
    console.log(nome, idade);
}


mostraNome(usuario); //Renato 31