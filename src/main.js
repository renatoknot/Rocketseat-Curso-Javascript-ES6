//MODULO WEBPACK - AULA2

//  import { soma, {sub}  } from './funcoes'; // renomeando a function usando o 'as'

//importando todas as funcoes de uma vez
// import * as funcoes from '../funcoes';
// console.log(funcoes);

//usando o export default do arquivo soma.js
// import somaFunction from './soma'; podemos tambem dar outra nome para function sem necessariamente ter o mesmo nome da function no arquivo soma.js


//  console.log(funcoes.soma(1,2));
//  console.log(funcoes.sub(1,2));
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000);
});

// minhaPromise().then(response => ...); ANTES


// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());

//     //usando sem o async/await ficaria assim
//     // minhaPromise().then(response => {
//     //     console.log(response);

//     //     minhaPromise().then(response => {
//     //         console.log(response);

//     //         minhaPromise().then(response => {
//     //             console.log(response);
//     //         })
//     //     })
//     // })
// }

//CONVERTENDO A FUNÇÃO ACIMA PARA ARROW FUNCTION
// const executaPromise = async () => {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// };

// executaPromise();

import axios from 'axios';

class Api {
    static async getUserInfo(username){
        const response = await axios.get(`https://api.github.com/users/${username}`);

        console.log(response);
    }
}

Api.getUserInfo('renatoknot');