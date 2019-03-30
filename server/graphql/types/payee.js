import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} from 'graphql';
import {account, createDummyAccount} from './account';

const createDummyPayee = ()=>{
  return {
    id: "hk1231uib3nmb12i3yts",
    name: "sample payee",
    income_period: "semi-monthly",
    income_amount: 2000,
    accounts: [createDummyAccount()]
  };
};

const payee = new GraphQLObjectType({
  name: 'payee',
  fields: {
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    income_period: {type: GraphQLString},
    income_amount: {type: GraphQLInt},
    accounts: {type: GraphQLList(account)}
    }
});

const payee_information = {
  type: payee,
  resolve(){
    return createDummyPayee();
  }
};

export {
  payee,
  payee_information,
  createDummyPayee
};