import assert from 'assert';
import logger from '../../log';
import {query} from '../utilities/database';
import {GraphQLInt} from "graphql";
import payment from "../types/payment";

const getPayment = async (obj, args, context, info)=>{
  try {
    let {id} = args;
    assert.notStrictEqual(id, undefined, "record ID for payment cannot be empty");
    let {rows, rowCount} = await query("SELECT * FROM payments where id = $1", [id]);
    assert.notStrictEqual(rowCount, 0, "payment record does not exist");
    assert.strictEqual(rowCount, 1, `query for payment record resulted in multiple '${rowCount}' results`);
    logger.log("info", `Successfully retrieved payment record '${id}'`);
    return rows[0];
  }catch(exception){
    logger.log("error", `Failed to get payment. ${exception.message}`);
  }
};

const paymentInformation = {
  type: payment,
  args: {id: {type: GraphQLInt}},
  resolve: getPayment
};

export default paymentInformation;