import React from 'react';

const CartItem = ({ item, onClick }) => {
    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
                <span className="cart-item__name">{item.name}</span>
            </div>
            <div className="cart-item__price">{item.price} <b>PKR/-</b></div>
        </div>
    );
}


export default CartItem;