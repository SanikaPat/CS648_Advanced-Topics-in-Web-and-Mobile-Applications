const initialEmployees = [
    [23412341, 'Zak Ruvalcaba',   4242, 'zruvalca@gmail.com',      'Executive'],
    [63456345, 'Sally Smith',     2423, 'sally@gmail.com',     'Administrative'],
    [94949539, 'Mark Martin',     3456, 'mark@gmail.com',      'Marketing'],
    [10293847, 'Linda Torres',    1122, 'ltorres@gmail.com',   'Engineering'],
    [57483920, 'James Nguyen',    5678, 'jnguyen@gmail.com',   'Sales'],
];

const form     = document.getElementById('addForm');
const tbody    = document.getElementById('employeeBody');
const empCount = document.getElementById('empCount');

let employees;

if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
} else {
    employees = initialEmployees;
}

function buildGrid(arr) {
    tbody.innerHTML = '';

    for (const emp of arr) {
        const row = `
            <tr>
                <td>${emp[0]}</td>
                <td>${emp[1]}</td>
                <td>${emp[2]}</td>
                <td>${emp[3]}</td>
                <td>${emp[4]}</td>
                <td>
                    <button class="btn btn-danger btn-sm"
                        onclick="deleteEmployee(${emp[0]})">x</button>
                </td>
            </tr>`;
        tbody.innerHTML += row;
    }

    empCount.value = '(' + arr.length + ')';
    localStorage.setItem('employees', JSON.stringify(arr));
}

function addEmployee(arr) {
    const id         = document.getElementById('id').value;
    const name       = document.getElementById('name').value;
    const extension  = document.getElementById('extension').value;
    const email      = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    const newEmployee = [Number(id), name, Number(extension), email, department];
    arr.push(newEmployee);

    buildGrid(arr);

    form.reset();
    document.getElementById('id').focus();
}

function deleteEmployee(id) {
    if (confirm('Are you sure you want to delete this employee?')) {
        employees = employees.filter(emp => emp[0] !== id);
        buildGrid(employees);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addEmployee(employees);
});

buildGrid(employees);