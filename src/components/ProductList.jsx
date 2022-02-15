import React, { Component } from "react";
import Product from './Product';
//On récupere dans les props la fonction addToCart passer précedemment dans app.js on transfere la fonction addToCart dans le composant product

export default class ProductList extends Component {
    render() {
        const {products, addToCart} = this.props;
        const productsJsx = products.map(product => <Product key={product.id} product={product} image={product.image.contentUrl}  addToCart={addToCart}/>)

        return (
            <div className="productList" >
                {productsJsx}
            </div>
        )
    }
}
