import {} from 'dotenv/config';
import schema from './graphql/schema';
import graphqlHTTP from 'express-graphql';
import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(process.env.API_PORT, ()=>{
  console.log(`Backend running in port ${process.env.API_PORT}`);
});