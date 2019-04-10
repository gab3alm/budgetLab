import {GraphQLSchema,  GraphQLObjectType} from 'graphql';
import {payee_information} from './types/payee';
import paymentInformation from './resolvers/payment';
import accountInformation from './resolvers/account';
import addPayeeRecord from "./mutations/payee";
import addPaymentRecord from './mutations/payment';
import addAccountRecord from "./mutations/account";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields:{
      payee: payee_information,
      payment: paymentInformation,
      account: accountInformation
    }
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutationType",
    fields:{
      createPayee: addPayeeRecord,
      createPayment: addPaymentRecord,
      createAccount: addAccountRecord
    }
  })
});

export default schema;