import React from "react";
import api from './api';
import ListFilmes from "./listFilmes";

function Filmes(){
    
    const [filmes, setFilmes] = React.useState();
    const [pesquisa, setPesquisa] = React.useState();

    async function componentDidMount(){
        const response = await api.get(pesquisa);
        response.data.length > 0 ? setFilmes(response.data) : alert("Filme não encontrado!");   
    }
  
        return(
            <div>
                <h1 className="title">Filmes</h1>
                <input className="pesqBar" type="text" placeholder="Digite o Nome do Filme" onChange={(e) => setPesquisa(e.target.value)}></input>
                <button onClick={componentDidMount}>Pesquisar</button>
                <ListFilmes filmes={filmes}/>
            </div>
        );
                

}

export default Filmes;
