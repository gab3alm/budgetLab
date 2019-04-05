import {query} from '../utilities/database';
import logger from '../../log';
import assert from 'assert';

const getPayee = async (obj, args, context, info)=>{
  try {
    let {id} = args;
    assert.notStrictEqual(id, undefined, "record id cannot be undefined"); //throw if record id is undefined
    const {rowCount, rows} = await query("SELECT * FROM payees WHERE id = $1", [id]);
    assert.strictEqual(rowCount, 1, `incorrect amount of records returned for ID '${id}'`); //throw if no record or more than one record was returned.
    logger.log("info", `Successfully fetched payee record. ID: ${id}`);
    return rows[0];
  }catch (exception){
    logger.log("error", `Failed to retrieve payee record. Reason: ${exception.message}`);
  }
};

export {
  getPayee
};