import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const fake10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(fake10);
    const [cart, setCart] = useState([]);


    const handleAddProduct = (product) => {

        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        {
                            product.map(pd => <Product 

                                handleAddProduct={handleAddProduct}
                                product={pd} 


                                ></Product>)
                        }
                        {/* <hr/> */}
                    </div>
                    
                    <div className="col-2 ">
                        <div className="product-details">
                        <Cart cart={cart}></Cart>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;