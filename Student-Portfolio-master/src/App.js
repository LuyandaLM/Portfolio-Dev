import React from "react";
import "./App.css";
import { Layout, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="demo-big-content">
      <Layout>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
