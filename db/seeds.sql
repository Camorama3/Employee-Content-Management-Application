INSERT INTO departments (department_name) VALUES ('Sales');
INSERT INTO departments (department_name) VALUES ('Engineering');
INSERT INTO departments (department_name) VALUES ('Finance');

INSERT INTO roles (role_title, salary, department_id) VALUES ('Salesperson', 50000.00, 1);
INSERT INTO roles (role_title, salary, department_id) VALUES ('Engineer', 70000.00, 2);
INSERT INTO roles (role_title, salary, department_id) VALUES ('Accountant', 60000.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Smith', 2, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Alice', 'Johnson', 3, 1);
