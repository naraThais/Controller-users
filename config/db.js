const mysql = require('mysql2/promise');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'apinode',
});

module.exports = pool;