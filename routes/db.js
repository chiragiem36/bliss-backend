const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

let db

(async function() {
  // Connection URL
  const url = 'mongodb://localhost:27018/data';
  // Database Name
  const dbName = 'data';
  let client;

  try {
    // Use connect method to connect to the Server
    client = await MongoClient.connect(url, { useNewUrlParser: true });

    db = client.db(dbName);

  } catch (err) {
    console.log(err.stack);
  }

})();

module.exports.db = function () {
	return db
}