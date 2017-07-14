
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const addMockFunctionsToSchema = require('graphql-tools').addMockFunctionsToSchema;
const resolvers = require('./resolvers').resolvers;

// const mocks = {
//   String: () => 'It works!',
// };


const typeDefs = `

type Film {
    id: Int
    title: String
    thumbnail: String
    poster: String
    reviews: [Review]
}

type Review {
    id: String
    author: String
    content: String
    url: String
    filmId: Int
    film: Film
}

type Query {
  films(searchTerm: String): [Film]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

module.exports.schema = schema;