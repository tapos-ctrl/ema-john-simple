import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart= props.cart;
    console.log(cart.name)
    const total = cart.reduce((total, prd) => total + prd.price ,0);
    // const totals= (total).toFixed(2);
    // const totalss= parseFloat(totals);


    function financial(num) {
        return Number.parseFloat(num).toFixed(2);
      }



   let shipping = 0;
   if(total > 35){
       shipping = 0;
   }
   else if(total > 15){
       shipping = 4;
   }
   else if(total > 0){
       shipping = 12;
    }
    const text = (total / 10).toFixed(2)
    
    return (
        <div className="summary-style text-start mx-2">
            <h4>Order Summary</h4>
            <h5>Items Order:{cart.length}</h5>
            <p>Product Price : {financial(total)}</p>
            <p><small>Shopping Cost { shipping}</small></p>
            <p> Tax + VAT {text}</p>
            <p>Price: {financial(total + shipping + parseFloat(text))}</p>
        </div>
    );
};

export default Cart;