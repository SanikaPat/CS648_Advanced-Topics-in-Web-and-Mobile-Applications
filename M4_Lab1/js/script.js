const form = document.getElementById('addForm');
const table = document.getElementById('employees');
let empCount = 0;



form.addEventListener('submit', (e) => {

    e.preventDefault();

    const id         = document.getElementById('id').value;
    const name       = document.getElementById('name').value;
    const extension  = document.getElementById('extension').value;
    const email      = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    const row = table.insertRow();

    const cellID   = row.insertCell();
    const cellName = row.insertCell();
    const cellExt  = row.insertCell();
    const cellEmail = row.insertCell();
    const cellDept = row.insertCell();
    const cellDel  = row.insertCell();

    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(department));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.addEventListener('click', deleteEmployee);
    cellDel.appendChild(deleteBtn);


    form.reset();


    document.getElementById('id').focus();


    empCount++;
    document.getElementById('empCount').value = '(' + empCount + ')';
});


function deleteEmployee(e) {
    if (confirm('Are you sure you want to delete this employee?')) {
        const row = e.target.parentElement.parentElement;
        table.deleteRow(row.rowIndex);
        empCount--;
        document.getElementById('empCount').value = '(' + empCount + ')';
    }
}