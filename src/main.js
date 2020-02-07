//MODULO WEBPACK - AULA2

//  import { soma, {sub}  } from './funcoes'; // renomeando a function usando o 'as'

//importando todas as funcoes de uma vez
// import * as funcoes from '../funcoes';
// console.log(funcoes);

//usando o export default do arquivo soma.js
// import somaFunction from './soma'; podemos tambem dar outra nome para function sem necessariamente ter o mesmo nome da function no arquivo soma.js


//  console.log(funcoes.soma(1,2));
//  console.log(funcoes.sub(1,2));
// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => {resolve('OK')}, 2000);
// });

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

// import axios from 'axios';

// class Api {
//     static async getUserInfo(username){
//         const response = await axios.get(`https://api.github.com/users/${username}`);

//         console.log(response);
//     }
// }

// Api.getUserInfo('renatoknot');


import api from './api';
class App {
    constructor() {
        this.repositories = [];
        
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }
    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true ) {
        if(loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');
            
            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(){
        event.preventDefault();//evita recarregar html

        const repoInput = this.inputEl.value;

        if(repoInput.length === 0)
            return;


        this.setLoading();

        try {
            const response  = await api.get(`/repos/${repoInput}`);
            
            const {name, description, owner: { avatar_url }, html_url } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            
            this.inputEl.value = '';
            this.render();
        } catch(err) {
            alert('O repositório não existe');
        }

        this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        })
    }
}

new App();