import React from 'react';


const Imagen=(props)=>{

    const {largeImageURL, likes, previewURL, tags, views}=props.imagen;

    return(
        <div className="container card containerHotel">
            <div className="row align-items-center">
                <div className="col align-self-center">
                <img src={previewURL} alt={tags}/>
                </div>
                
                <div className="col align-self-center">
                    <div className="container ">
                    <p className="row titleHotel"><bold>Hotel Pepito</bold></p>
                    <p className="row">{likes} Me gusta</p>
                    <p className="row">{views} Vistas</p>
                    <p className="row">Muñequitos</p>
                    </div>
                </div>

                <div className="col colPrices">
                    <div className="container">
                    <p className="row">$ {likes}</p>
                    <p className="row">para {views} personas</p>
                    <a rel="noopener noreferrer" href={largeImageURL} target="_blank"  className="btn btn-primary btn-block row"> Ver detalles</a>
                    </div>
                </div>
                </div>

                
                
        </div>
    )
}

export default Imagen;