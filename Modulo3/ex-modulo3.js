import axios from 'axios';

//1.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
const umPorSegundo = async () => {
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
}
umPorSegundo();

//1.2
const getUserFromGithub = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.log('Usúario não existe');
    }
}
getUserFromGithub('renatoknot');

//1.3
// class Github {
//     static getRepositories(repo) {
//         axios.get(`https://api.github.com/repos/${repo}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Repositório não existe');
//         })
//     }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https:/api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (err) {
            console.log('Repositório não existe')
        }
    }
}
Github.getRepositories('joaooliveiradev/starter-rocketseat-javascriptES6');


//1.4
const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log('Usuário não existe');
    });
}
buscaUsuario('diego3g');


async function buscaUsuario(usuario) {
    try{
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch(err) {
        console.log('Usuário não existe');
    }
}

buscaUsuario('diego3g');