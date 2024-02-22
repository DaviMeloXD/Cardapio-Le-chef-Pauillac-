import { useState } from "react";
import './App.css'
import Eiffel from "./assets/torrelogo.png"
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";

export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);
  return <>
   <header className="nomenegocio">
    <h1 className="nomenegocio">Le chef Pauillac</h1>
    <img src={Eiffel} alt="" className="nomenegocio"/>
    <div>
    </div>
   </header>
  <h2 className="capa"></h2>
    <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />
    <div className="menu">
      {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
    </div>
   </>
}