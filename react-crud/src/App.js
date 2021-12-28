import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "antd/dist/antd.min.css";
import "./App.css";
import { Layout, Menu } from "antd";

import AddEmployee from "./components/AddEmployee";
import Employee from "./components/Employee";
import EmployeesList from "./components/EmployeesList";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1"><Link to={"/"}>Tharwah</Link></Menu.Item>
          <Menu.Item key="2"><Link to={"/employees"}>Employees</Link></Menu.Item>
          <Menu.Item key="3"><Link to={"/add"}>Add</Link></Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: "0 50px" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
        <Routes>
          <Route path="/tutorials/" element={<EmployeesList/>} />
          <Route path="/add/" element={<AddEmployee/>} />
          <Route path="/tutorials/:id/" element={<Employee/>} />
        </Routes>
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Tharwah ©2021 Created by MHM
      </Footer>
    </Layout>
  );
}

export default App;
