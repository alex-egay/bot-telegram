const { Pool } = require('pg');
const dbCredentials = require('../config/db');

const pool = new Pool(dbCredentials);

module.exports.db = {
  queryToDb: async (query) => {
    const client = await pool.connect();
    try {
      return await client.query(query);
    } catch (e) {
      throw e;
    } finally {
      client.release();
    }
  }
};