const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user_system'
})

db.connect((err) => {
    if(err){
        console.log('Error connecting database : ',err)
        return
    }
    console.log('Connecting to the database.....')
})

module.exports = db;