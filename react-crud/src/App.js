import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'antd/dist/antd.min.css';
import { Layout, Menu } from 'antd';
import "./App.css";

import AddEmployee from "./components/AddEmployee";
import Employee from "./components/Employee";
import EmployeesList from "./components/EmployeesList";

const { Header, Content, Footer } = Layout;
function App() {
  return (
  <BrowserRouter>
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to={"/employees"}>Employees</Link></Menu.Item>
          <Menu.Item key="2"><Link to={"/add"}>Add</Link></Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            contect
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Tharwah ©2021 Created by MHM</Footer>
    </Layout>
    <div>
      <Routes>
        <Route path={["/employees"]} element={<EmployeesList/>} />
        <Route path='/add' element={<AddEmployee/>} />
        <Route path='/employees/:id/' element={<Employee/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
