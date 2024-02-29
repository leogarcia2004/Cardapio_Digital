
import {useState} from "react";
import restaurante from "./assets/hashtaurante.webp"; 
import './App.css'; 
import {Navegacao} from './navegacao'; 
import {ItemCardapio} from './itemCardapio'; 
import {pratosPrincipais, sobremesas, bebidas} from './cardapio'; 


export function App() { 

  const paginasMenus = [pratosPrincipais, sobremesas, bebidas]; 
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return <>
          <img src={restaurante} alt=""  className="capa" />
          <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
          <div className="menu">
            {paginasMenus[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} decricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}     
          </div>
          
        </> 

}

