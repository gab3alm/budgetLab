import {GraphQLString, GraphQLInt} from 'graphql';
import {payee} from "../types/payee";
import {pool} from '../utilities/database';
import assert from 'assert';
import logger from '../../log';

//PAYEE RECORD INSERTION
const insertPayee = async ({name, income_period, income_amount, accounts}, connection = pool)=>{
  try {
    assert.notStrictEqual(name, undefined, "name field is mandatory"); //throw if name is undefined/null
    const statement = "INSERT INTO payees (name, income_period, income_amount, accounts) VALUES($1, $2, $3, $4) RETURNING id";
    const values = [name, income_period, income_amount, accounts];
    const results = await connection.query(statement, values);
    const insertedRecordId = results && results.rows[0];
    logger.log('info', `Successfully added payee record. ${insertedRecordId.id}`);
    return insertedRecordId;
  }catch (exception){
    logger.log('error', `Failed to insert payee record. Reason: ${exception.message}`);
  }
};

//CONTAINER FOR PAYEE INSERTION
const addPayee = async (obj, args, context, info)=>{
  return await insertPayee(args);
};

//MUTATION - PAYEE ADDITION
const addPayeeRecord = {
  type: payee,
  args: {
    name: {type: GraphQLString},
    income_period: {type: GraphQLString},
    income_amount: {type: GraphQLInt},
    accounts: {type: GraphQLString}
  },
  resolve: addPayee
};

export {addPayeeRecord};