import React, { useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const ItemCount = ({ stock, initial, onAdd, productoCarrito }) => {

    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(initial);

    const incrementar = () => {
        setCount((val) => (val < stock ? count + 1 : count));
    }
    const decrementar = () => {
        setCount((val) => (val > 1 ? count - 1 : count));
    }

    return (
        <div>
            <div>
                <button onClick={decrementar} className="btnCountDecremento"> - </button>
                <span className='fw-bold fs-4'>{count}</span>
                <button onClick={incrementar} className="btnCountIncremento">+</button>
            </div>
            <div>
                <button onClick={() => {
                    onAdd(`${count}`);
                    addItem(productoCarrito, count);
                }}
                    className="btnCarrito" ><span>ADD</span></button>
            </div>
            <div>
                <span className='fst-italic'>
                    <b>{stock - count}</b> amount available!
                </span>
            </div>
        </div>);
}

export default ItemCount