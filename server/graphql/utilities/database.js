import {Pool, Client} from 'pg';

//pg pool uses environment variables for connection information
//https://node-postgres.com/features/connecting
const pool = new Pool();

// Query the database given a statement and values
const query = async (statement, values, connection = pool)=>{
  try {
    const queryResult = await connection.query(statement, values);
    let {rowCount, rows} = queryResult;
    return {
      rowCount,
      rows
    };
  } catch (err){
    console.log(err.message, err.stack);
  }
};

export {pool, query};