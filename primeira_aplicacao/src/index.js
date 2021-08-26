import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const lista = [
  {
    id: 10,
    nome: "Antonio",
  },
  {
    id: 20,
    nome: "Deusany",
  },
  {
    id: 30,
    nome: "de Carvalho",
  },
  {
    id: 40,
    nome: "Junior",
  },
];

function Pessoas() {
  return (
    <div className="pessoas">
      {lista.map((item, index) => (
        <p>
          {index} : {item.nome}
        </p>
      ))}
    </div>
  );
}

function Pessoa(props) {
  return (
    <div className="pessoa">
      id={lista[props.id - 1].id} : nome={lista[props.id - 1].nome}
    </div>
  );
}

ReactDOM.render(<Pessoas />, document.getElementById("root"));
