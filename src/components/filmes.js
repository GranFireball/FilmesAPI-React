import React from "react";
import api from './api';

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
              {filmes && filmes.map((filme) => (
                <div className="list"  key={filme.show.id}>
                <li className="itemList">
                    <h3>
                        <strong>Titulo: </strong>
                        {filme.show.name}
                    </h3>
                    <p><strong>Nota: </strong>{filme.show.rating.average? filme.show.rating.average : 'Não encontrado'}</p>
                    <p><strong>URL: </strong>{filme.show.url}</p>
                </li>
                </div>
              ))}
            </div>
        );
                

}

export default Filmes;
