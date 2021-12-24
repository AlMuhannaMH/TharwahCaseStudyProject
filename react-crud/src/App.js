import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import "./App.css";

import AddEmployee from "./components/AddEmployee";
import Employee from "./components/Employee";
import EmployeesList from "./components/EmployeesList";

const { Header, Content, Footer } = Layout;
function App() {
  return (
  <div>
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to={"/employees"}>Employees</Link></Menu.Item>
          <Menu.Item key="2"><Link to={"/add"}>Add</Link></Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <div>
          {/* <Switch>
          <Route exact path={["/", "/employees"]} component={EmployeesList} />
          <Route exact path="/add" component={AddEmployee} />
          <Route path="/employees/:id" component={Employee} />
          </Switch> */}
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Tharwah ©2021 Created by MHM</Footer>
    </Layout>
  </div>
  );
}

export default App;
