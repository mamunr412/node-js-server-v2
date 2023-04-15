const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'mamunriaz@98@',
  database: 'users',
});

// connect to MySQL database
db.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database', error);
    return;
  }

  console.log('Connected to MySQL database ');
});

module.exports = db;