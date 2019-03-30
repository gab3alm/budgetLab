import {GraphQLObjectType, GraphQLString, GraphQLFloat} from 'graphql';
import {createDummyPayee, payee} from "./payee";

const createDummyPayment = ()=>{
  return {
    id: "1h231n2mn3bkui4512",
    account: "kjn1m2n3,nkjh1kj",
    date: "12/01/2018",
    owner: "Sample owner",
    amount: 213.52,
    pending_balance: 5182.12
  };
};

const payment = new GraphQLObjectType({
  name: 'payment',
  fields:{
    id: {type: GraphQLString},
    account: {type: GraphQLString},
    date: {type: GraphQLString},
    owner: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    pending_balance: {type: GraphQLFloat}
  }
});

const payment_information = {
  type: payment,
  resolve(){
    return createDummyPayment();
  }
};

export {
  payment_information,
  createDummyPayment,
  payment
};