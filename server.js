const inquirer = require('inquirer');
const express = require('express');
// const mysql = require('mysql2');
const mysql = require('mysql2/promise');

function mainMenu() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    }
  ]).then(answer => {
    switch (answer.menu) {
      case 'View all departments':
        break;
      case 'View all roles':
        break;
      case 'Exit':
        process.exit(0);
    }
  });
}

mainMenu();
async function getAllDepartments() {
  const connection = await mysql.createConnection({ /* connection details */ });
  const [rows, fields] = await connection.execute('SELECT * FROM departments');
  connection.end();
  return rows;
}

getAllDepartments().then(departments => {
  console.log(departments);
}).catch(err => {
  console.error(err);
});

// app.use((req, res) => {
//   res.status(404).end();
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
