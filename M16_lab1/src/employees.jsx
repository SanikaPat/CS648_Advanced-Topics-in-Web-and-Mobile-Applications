import React from 'react';
import ReactDOM from 'react-dom/client';
import EmployeeList from './EmployeeList.jsx';

const root = ReactDOM.createRoot(document.getElementById('content'));

root.render(
  <React.StrictMode>
    <EmployeeList />
  </React.StrictMode>
);

    // let sally = 'Sally Smith'
    // let mark = 'Mark Martin'
    // let holly = 'Holly Unlikely'
    // let amol = 'Amol Shookup'
    // let robin = 'Robin H'
    // let sam = 'Sam Sly'
    // const element = (
    // <ul style={{'color':'blue', 'fontSize': '24px'}}>
    //     <li>{sally}</li>
    //     <li>{mark}</li>
    //     <li>{holly}</li>
    //     <li>{amol.toUpperCase()}</li>
    //     <li>{robin}</li>
    //     <li>{sam}</li>
    // </ul>
    // )
    // ReactDOM.render(element, document.getElementById('content'))