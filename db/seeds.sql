INSERT INTO departments (name)
VALUES  ("Sales"),
        ("Development"),
        ("Accounting"),
        ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Sales Lead", 120000, 1),
        ("Sales Rep", 60000, 2),
        ("Development Lead", 120000, 3),
        ("Front-End Engineer", 70000, 4),
        ("Back-End Engineer", 80000, 4),
        ("Accounting Lead", 120000, 5),
        ("Accountant", 100000, 6),
        ("Legal Lead", 200000, 7),
        ("Lawyer", 150000, 8);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Robin", "Watterworth", 5, null),
        ("Ronan", "Daniel", 3, null),
        ("Alyssa", "Burns", 1, null),
        ("Sophia", "Stoffer-Choo", 7, null),
        ("Angela", "Cain", 4, 3),
        ("Brandon", "Goff", 4, 3),
        ("Sean", "Larson", 2, 1),
        ("Christine", "Jacobs", 6, 5),
        ("Jerry", "Williams", 8, 7);
        


