import React from "react";
import ReactDOM from "react-dom";
import Route from "react-router-dom";
import Agua from "./Agua";
import Inicial from "./Inicial";
import Contato from "./Contato";

import { Route, NavLink, HashRouter } from "react-router-dom";

ReactDOM.render(
  /*  <Agua fusao={0} ebulicao={100} condicao="CNTP" />,
  document.getElementById("root")
*/
  <HashRouter>
    <div>
      <h1>Single Page Application - SPA</h1>
      <ul>
        <li>
          <NavLink href="/inicial">Inicial</NavLink>
        </li>
        <li>
          <NavLink href="/contato">Contato</NavLink>
        </li>
      </ul>
    </div>
  </HashRouter>,
  document.getElementById("root")
);
