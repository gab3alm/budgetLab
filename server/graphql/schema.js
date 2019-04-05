import {GraphQLSchema,  GraphQLObjectType} from 'graphql';
import {payee_information} from './types/payee';
import {payment_information} from './types/payment';
import {account_information} from './types/account';
import {addPayeeRecord} from "./mutations/payee";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields:{
      payee: payee_information,
      payment: payment_information,
      account: account_information
    }
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutationType",
    fields:{
      createPayee: addPayeeRecord
    }
  })
});

export default schema;