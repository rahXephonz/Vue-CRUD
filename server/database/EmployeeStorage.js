const db = require('./index')
const TABLE_NAME = 'employees'

async function createEmployeeTable(){    
    try {
        console.log('EMPLOYEE TABLE CREATED')
        let sql = `CREATE TABLE IF NOT EXISTS ${TABLE_NAME}(
            id serial,
            name VARCHAR(50) NOT NULL,
            gender VARCHAR(7) NOT NULL,
            departement VARCHAR(50) NOT NULL,
            about text,
            PRIMARY KEY(id)
        )`
        await db.query(sql)
        
    } catch (error) {
        console.error(error)
    }
}

module.exports = createEmployeeTable