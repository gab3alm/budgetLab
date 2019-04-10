import payment from '../types/payment';
import {query} from '../utilities/database';
import {GraphQLFloat, GraphQLString} from "graphql";
import logger from '../../log';
import assert from 'assert';

const removePayment = async (id)=>{
  try {
    assert.notStrictEqual(id, undefined, `payment id cannot be undefined`);
    let {rows, rowCount} = await query("DELETE FROM payments WHERE id = $1 RETURNING id", [id]);
    assert.notStrictEqual(rowCount, 0, `payment with id '${id}' does not exists in database`);
    assert.strictEqual(rowCount, 1, 'more than one payment record was removed');
    logger.log("info", `successfully removed payment with id '${id}'`);
    return rows[0];
  }catch (exception){
    logger.log("error", `failed to remove payment '${id}'. Reason: ${exception.message}`);
  }
};

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

export {addPaymentRecord, removePayment};