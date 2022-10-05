import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeTableContainer from './components/EmployeeTable/EmployeeTable.container';
import EmployeeAppBar from './components/EmployeeAppBar/EmployeeAppBar';

function App() {
  return (
    <div className="App">
      <EmployeeAppBar></EmployeeAppBar>
      <EmployeeTableContainer></EmployeeTableContainer>
    </div>
  );
}

export default App;
