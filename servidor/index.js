const express = require('express');
const app = express();
const port = 3031;


const produtos = [
    {
       id: '1',
       nome:'vue.js',
       preco:'R$10,00',
       foto:'https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg',
    },
    {
       id: '2',
       nome:'react.js',
       preco:'R$12,50',
       foto:'https://entredevs.com.br/wp-content/uploads/2021/02/react.png',
    },
    {
       id: '3', 
       nome:'angular.js',
       preco:'R$8,00',
       foto:'https://img2.gratispng.com/20180701/rht/kisspng-angularjs-logo-javascript-security-token-5b38e22b8a3f38.7851363415304545715663.jpg',
    },
    {
      id: '4',
      nome:'django',
      preco:'R$15,00',
      foto:'https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-django_1938.jpg',
   },
   {
    id: '5',
    nome:'Flutter',
    preco:'R$5,00',
    foto:'https://miro.medium.com/max/3140/1*G59SYlc38Bu39GlqcJ5R6Q.jpeg',
 },
  ];

  app.get('/', (req, res) => {
    res.send('Hello World!!!');
  })
  
  app.get('/produtos', (req, res) => {
    res.send(produtos);
  })
  
  app.get('/produtos/:id', (req, res) => {
    const produto = produtos.filter((produto) => produto.id == req.params.id);
    res.send(produto[0]);
  });
  
  app.listen(port, '0.0.0.0', () => {
    console.log('Servidor online');
  });