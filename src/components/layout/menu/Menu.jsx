import "./Menu.css";
import React from "react";

import { Link } from "react-router-dom";

const Menu = (props) => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Início</Link>
                </li>
                <li>
                    <Link to={"/about"}>Sobre</Link>
                </li>
                <li>
                    <Link to={"/param/parametro-1"}>Param #01</Link>
                </li>
                <li>
                    <Link to={"/param/ola-mundo"}>Param #02</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu;
