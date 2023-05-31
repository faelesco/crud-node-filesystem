const fs = require ('fs');

console.log('[CRUD] Node - File System');

const crud = {
    posts: [],
    read(){
        crud.posts = JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8'}));
        return crud.posts;
    },
    create({ id, content }) {
        const dados = { id, content };
        crud.posts.push(dados);
        fs.writeFileSync('./db.json', JSON.stringify(crud.posts), { encoding: 'utf-8'});
    }
}

//Read
console.log('Leitura do arquivo', crud.read());

//Create
crud.create({ id: Date.now(), content: 'Valor random' });

//Update