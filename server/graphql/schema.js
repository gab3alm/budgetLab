import {GraphQLSchema,  GraphQLObjectType} from 'graphql';
import {payee_information} from './types/payee';
import paymentInformation from './resolvers/payment';
import {account_information} from './types/account';
import {addPayeeRecord} from "./mutations/payee";
import addPaymentRecord from './mutations/payment';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields:{
      payee: payee_information,
      payment: paymentInformation,
      account: account_information
    }
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutationType",
    fields:{
      createPayee: addPayeeRecord,
      createPayment: addPaymentRecord
    }
  })
});

export default schema;