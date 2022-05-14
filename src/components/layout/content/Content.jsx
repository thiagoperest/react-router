import "./Content.css";
import React from "react";
import { Route, Routes } from "react-router-dom"

import Home from "../../../views/examples/home/Home";
import About from "../../../views/examples/about/About";
import Param from "../../../views/examples/param/Param";
import NotFound from "../../../views/examples/NotFound";

const Content = (props) => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" exact element={<Home/>} />
            <Route path="/param/:id" exact element={<Param/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </main>
)

export default Content;
