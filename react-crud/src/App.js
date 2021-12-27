import React from "react";
import "antd/dist/antd.min.css";
import "./App.css";
import { Layout, Menu } from "antd";

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
          <Menu.Item key="1">Employees</Menu.Item>
          <Menu.Item key="2">Add</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          {/* <UserRecord /> */}
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Tharwah ©2021 Created by MHM
      </Footer>
    </Layout>
  );
}

export default App;
