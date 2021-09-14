INSERT INTO department (name)
VALUES  ("Sales"),
        ("Development"),
        ("Accounting"),
        ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES  ("Sales Lead", 120.00, 1),
        ("Sales Rep", 60.00, 2),
        ("Development Lead", 120.00, 3),
        ("Front-End Engineer", 70.00, 4),
        ("Back-End Engineer", 80.00, 4),
        ("Accounting Lead", 120.00, 5),
        ("Accountant", 100.00, 6),
        ("Legal Lead", 200.00, 7),
        ("Lawyer", 150.00, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Robin", "Watterworth", 5),
        ("Ronan", "Daniel", 3),
        ("Alyssa", "Burns", 1),
        ("Sophia", "Stoffer-Choo", 7),
        ("Angela", "Cain", 4, 3),
        ("Brandon", "Goff", 4, 3),
        ("Sean", "Larson", 2, 1),
        ("Christine", "Jacobs", 6, 5),
        ("Jerry", "Williams", 8, 7);
        


