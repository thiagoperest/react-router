import "./App.css";
import React from "react";
import Menu from "../components/layout/menu/Menu";
import Content from "../components/layout/content/Content";

const App = (props) => (
    <div className="App">
        <Menu/>
        <Content />
    </div>
)

export default App;
