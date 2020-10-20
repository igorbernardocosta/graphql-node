var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construir um esquema, usando a linguagem de esquema GraphQL 
var schema = buildSchema(`
  tipo Query {
    quoteOfTheDay: String
    aleatório: Float!
    rollThreeDice: [Int]
  }
`);

// A raiz fornece uma função de resolução para cada endpoint da API 
var root = {
    quoteOfTheDay: () = > {
        return Math.aleatório() < 0,
        5 ? 'Vá com calma' : 'A salvação está dentro';
    },
    aleatório: () = > {
        retornar matemática.aleatório();
    },
    rollThreeDice: () = > {
        retorno[1, 2, 3].mapa(_ = > 1 + Math.floor(Math.random() * 6));
    },
};

var app = express();
app.use('/ graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.ouvir(4000);
console.log('Executando um servidor GraphQL API em localhost: 4000 / graphql');