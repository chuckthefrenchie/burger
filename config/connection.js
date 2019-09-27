var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
      var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
      });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  connection.query(`
  CREATE TABLE IF NOT EXISTS burgers
  (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
  );
  `, function (err, result) {
    if (err) {
        console.error(err)
    }
  });
});

module.exports = connection;