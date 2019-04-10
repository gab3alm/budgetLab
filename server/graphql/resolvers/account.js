import {GraphQLInt} from "graphql";
import account from '../types/account';
import logger from '../../log';
import {query} from '../utilities/database';
import assert from 'assert';

const getAccount = async (obj, args, context, info)=>{
  try {
    let {id} = args;
    assert.notStrictEqual(id, undefined, "account record id cannot be undefined");
    let {rows, rowCount} = await query('SELECT * FROM accounts WHERE id = $1', [id]);
    assert.notStrictEqual(rowCount, 0, `there is no account record '${id}' in the database`);
    assert.strictEqual(rowCount, 1, `more than one record was found for '${id}'`);
    logger.log("info", `Successfully retrieved account record ${id}`);
    return rows[0];
  }catch (exception){
    logger.log('error', `Failed to fetch account. Reason: ${exception.message}`);
  }
};

const accountInformation = {
  type: account,
  args: {id: {type: GraphQLInt}},
  resolve: getAccount
};

export default accountInformation;