const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const createEmployeeTable = require('./database/EmployeeStorage');
const employees = require('./router/EmployeesRouter');

app.get('/', async (req, res) => {
  res.send(`API is running in... (>‿◠)✌`);
});

app.use(cors());

//akan dijalankan tidak pedulin itu http method,put,delete app use akan tetap dijalankan dan tidak butuh route
//dan mengubah data client dalam bentuk json
app.use(express.json());
app.use('/api/employees', employees);

app.listen(PORT, async () => {
  try {
    await createEmployeeTable();
    console.log(`LISTENING PORT IN ${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
