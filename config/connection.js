var mysql = require("mysql");


if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "12345678",
		database: "burgers_db"
	});
};

connection.connect(function(err){
    if (err){
        console.error("error connections: " + err.stack);
        return;
    }
    console.log ("Connected as id  " + connection.threadId);
});

module.exports = connection;