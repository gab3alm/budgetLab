import {GraphQLObjectType, GraphQLString, GraphQLFloat} from 'graphql';

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

export default payment;