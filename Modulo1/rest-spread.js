//REST
//    (resto do objeto)

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const{nome, ...resto} = usuario;

console.log(nome); //Diego
console.log(resto); //{ idade: 23, empresa: 'Rocketseat' }

const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a);//1
console.log(b);//2
console.log(c);//[3, 4]

function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1,3,4));//8



//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);//[ 1, 2, 3, 4, 5, 6 ]


const usuario1 = {
    nome: 'Renato',
    idade: 31,
    empresa: 'Rocketseat'
}

const usuario2 = {...usuario1, nome: 'Gabriel'};
console.log(usuario2);//{ nome: 'Gabriel', idade: 31, empresa: 'Rocketseat' }
