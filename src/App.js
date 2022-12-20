import "./styles.css";
import React, { Component } from "react";
import TabelaHead from "./componentes/TabelaHead";
import TabelaBody from "./componentes/TabelaBody";
import TabelaFoot from "./componentes/TabelaFoot";

class App extends Component {
  state = {
    livros: [
      {
        id: "111-11-1111-111-1",
        titulo: "Engenharia de Software",
        autor: "Pressman"
      },
      {
        id: "111-11-1111-111-2",
        titulo: "Engenharia de Software",
        autor: "Sommerville"
      },
      {
        id: "111-11-1111-111-3",
        titulo: "UML e Padrões",
        autor: "Larman"
      }
    ]
  };
  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaBody livros={this.state.livros} />
        <TabelaFoot />
      </table>
    );
  }
}
export default App;
