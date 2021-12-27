import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props)
    
    const { name, img, category, price, } = props.product;
    // console.log(props.product.features)
        // const {description} = props.product.features[0];
        
        // features.forEach(element => feature(element))
        // console.log(fea.)
    // function feature () {
    //     const fe = ;
    //     console.log(fe)
    // }


        
    return (
        <div className="custom-product">

            <div className=" d-lg-flex ">
                <div className="coln product-img">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col  custom-name text-start">
                    <p>{name}</p>
                    <div className="d-lg-flex col">
                        <div className="col-4 custom-name">
                            <p className="text-start text-dark my-0">By: {category}</p>
                            <p className="text-start text-dark my-0">${price}</p>
                            <button className="custom-btn text-start  mt-2" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon className="mx-2" icon={faShoppingCart} />Add to cart</button>
                        </div>
                        <div className="col-4 custom-name">
                            <p className="text-start text-dark my-0">By: {category}</p>
                            {/* <p>{description}</p> */}
                        

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Product;