import account from '../types/account';
import {GraphQLFloat, GraphQLString} from "graphql";
import GraphQLJSON from "graphql-type-json";
import {query} from '../utilities/database';
import assert from 'assert';
import logger from '../../log';

const addAccount = async (obj, args, context, info)=>{
  try {
    let {owner, name, due_date, unpaid_balance, period_payment, interest, description, payments_made} = args;
    assert.notStrictEqual(owner, undefined, "account owner cannot be undefined");
    const statement = `INSERT INTO accounts (owner, name, due_date, unpaid_balance, period_payment, interest, description, payments_made) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`;
    const values = [owner, name, due_date, unpaid_balance, period_payment, interest, description, payments_made];
    let {rows, rowCount} = await query(statement, values);
    assert.notStrictEqual(rowCount, 0, "failed while trying to insert account record");
    assert.strictEqual(rowCount, 1, "more than one account record was inserted!");
    const insertedRecord = rows[0];
    logger.log("info", `Successfully inserted account record '${insertedRecord.id}'`);
    return insertedRecord;
  }catch(exception){
    logger.log('error', `Failed to insert account record. Reason: ${exception.message}`);
  }
};

const addAccountRecord = {
  type: account,
  args: {
    owner: {type: GraphQLString},
    name: {type: GraphQLString},
    due_date: {type: GraphQLString},
    unpaid_balance: {type: GraphQLFloat},
    period_payment: {type: GraphQLFloat},
    interest: {type: GraphQLFloat},
    description: {type: GraphQLString},
    payments_made: {type: GraphQLJSON}
  },
  resolve: addAccount
};

export default addAccountRecord;