const { ApolloServer, gql } = require("apollo-server");

//GraphQLスキーマの定義
const typeDefs = gql`
  type Query {
    info: String!
  }
`;

//リゾルバ関数の定義
const resolvers = {
  Query: {
    info: () => `HackerNewsクローンa`,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => console.log(`${url}でサーバーを起動中・・・`));
