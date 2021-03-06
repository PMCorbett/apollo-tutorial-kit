import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import schema from './data/schema';

const GRAPHQL_PORT = 3000;

const graphQLServer = express();

graphQLServer.use(cors());

graphQLServer.use('/graphql', bodyParser.json(), (req, res) => {
  return graphqlExpress({
    schema: schema({
      authHeader: req.headers.authorization,
      tenantHeader: req.headers['x-crowdlab-tenant'],
    }),
    tracing: true,
    cacheControl: true,
  })(req, res);
});

graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);
