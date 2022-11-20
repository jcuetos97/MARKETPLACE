import React from "react";

import "../assets/css/general.css";
import "../assets/css/explore.css";


const Card = ({image,title,description,id,price}) => {
    return (
        <div className="card">
            <div className="card-image-container">
                <img className="card-image-top" src={image} alt={title}/>
            </div>
            
            <div className="card-body">
                <div className="card-body-content">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}</p>
                </div>
                <button className="btn-add" onClick={()=>console.log(`Add to cart ID: ${id}`)}>Add to Cart</button>
            </div>
        </div>
    )
};

export default Card;