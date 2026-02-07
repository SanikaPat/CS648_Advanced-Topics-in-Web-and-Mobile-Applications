window.addEventListener('load', () => {
    const $ = (selector) => document.querySelector(selector);
    
    $('#empForm').addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Employee ID: ' + $('#id').value);
        console.log('Name: ' + $('#name').value);
        console.log('Extension: ' + $('#ext').value);
        console.log('Email: ' + $('#email').value);
        console.log('Department: ' + $('#department').value);
    });
});

