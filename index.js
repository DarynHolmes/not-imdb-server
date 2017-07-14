const express = require('express');
const bodyParser = require('body-parser');
const graphqlExpress = require('graphql-server-express').graphqlExpress;
const graphiqlExpress = require('graphql-server-express').graphiqlExpress;
const schema = require('./schema').schema;

// const myGraphQLSchema = // ... define or import your schema here!
const PORT = 3000;

const graphQLServer = express();

// bodyParser is needed just for POST.
graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

console.log(`Listening on ${PORT}... `);
graphQLServer.listen(PORT);