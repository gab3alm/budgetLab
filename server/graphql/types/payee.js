import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import {getPayee} from '../resolvers/payee';

const payee = new GraphQLObjectType({
  name: 'payee',
  fields: {
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    income_period: {type: GraphQLString},
    income_amount: {type: GraphQLInt},
    accounts: {type: GraphQLJSON}
    }
});

const payee_information = {
  type: payee,
  args: {id: {type: GraphQLInt}},
  resolve: getPayee
};

export {
  payee,
  payee_information
};