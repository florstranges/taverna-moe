import React, {useState} from 'react';
import './ItemCount.css';
import Corona from './corona.png';

function ItemCount({ stock, initial }) {
    
    const [contador, setContador] = useState(initial);
    
    const agregar = () => {
        if (contador >= initial && contador < stock) {
            setContador(contador + 1);
        }
    }
    const quitar = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }

    const add = () => {
        console.log = (`Agregaste ${contador} items`)
    }

    return (
        <>
            <div className="producto">
                <img src={Corona} alt="Corona" className="Corona" />
                <h2>Cerveza Corona</h2>
                <p>Cantidad: {contador} </p>
                <button onClick={agregar} className="botonAccion">+</button>
                <button onClick={quitar} className="botonAccion">-</button>
                <button onClick={add} className="agregar">Agregar al carrito</button>
            </div>
        </>
    );
}

export default ItemCount;