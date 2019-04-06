import payment from '../types/payment';
import {query} from '../utilities/database';
import {GraphQLFloat, GraphQLString} from "graphql";
import logger from '../../log';
import assert from 'assert';

const addPayment = async (obj, args, context, info)=>{
  try {
    let {account, date, owner, amount, pending_balance} = args;
    assert.notStrictEqual(account, undefined, "account field cannot be undefined");
    assert.notStrictEqual(owner, undefined, "owner field cannot be undefined");
    assert.notStrictEqual(amount, undefined, "amount field cannot be undefined");
    const statement = "INSERT INTO payments (account, date, owner, amount, pending_balance) VALUES($1, $2, $3, $4, $5) RETURNING  id";
    const values = [account, date, owner, amount, pending_balance];
    const {rows, rowCount} = await query(statement, values);
    assert.strictEqual(rowCount, 1, 'failed to insert payment record.');
    return rows[0];
  }catch (exception){
    logger.log("error", `failed to add payment record. Reason: ${exception.message}`);
  }
};

const addPaymentRecord = {
  type: payment,
  args: {
    account: {type: GraphQLString},
    date: {type: GraphQLString},
    owner: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    pending_balance: {type: GraphQLFloat}
  },
  resolve: addPayment
};

export default addPaymentRecord;