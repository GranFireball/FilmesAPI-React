import React from "react";

export default function ListFilmes(props){
    return(
        <>
        {props.filmes && props.filmes.map((filme) => (
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
        </>
    );

}