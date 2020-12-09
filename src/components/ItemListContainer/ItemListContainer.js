import React from 'react';
import './ItemListContainer.css';

function ItemListContainer ({saludo}){
    return(
        <div>
            <h1 className="saludo">{saludo}</h1>
        </div>
    );
}

export default ItemListContainer;