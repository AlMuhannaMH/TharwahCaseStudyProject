import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "antd/dist/antd.min.css";
import { Layout, Menu } from "antd";
import "./App.css";

import AddEmployee from "./components/AddEmployee";
import Employee from "./components/Employee";
import EmployeesList from "./components/EmployeesList";

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
