import {GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLInt, GraphQLList} from 'graphql';
import GraphQLJSON from 'graphql-type-json';

const createDummyAccount = ()=>{
  return {
    id: "asdhk1hkj2hj3jkbh1b",
    owner: "sample owner",
    name: "Bank of america",
    due_date: "12/24/2019",
    unpaid_balance: 3520.00,
    period_payment: 240.21,
    interest: 3.25,
    description: ":Leisure expending account",
    payments_made: [""]
  };
};

const account = new GraphQLObjectType({
  name: 'account',
  fields: {
    id: {type: GraphQLString},
    owner: {type: GraphQLString},
    name: {type: GraphQLString},
    due_date: {type: GraphQLString},
    unpaid_balance: {type: GraphQLFloat},
    period_payment: {type: GraphQLFloat},
    interest: {type: GraphQLFloat},
    description: {type: GraphQLString},
    payments_made: {type: GraphQLJSON}
  }
});

export default account;