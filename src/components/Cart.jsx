import React, { Component } from 'react'
import CartItem from "./CartItem"

export default class Cart extends Component{
   render(){
      const {cartProducts, addToCart, removeFromCart}=this.props;

      const displayCartProduct=cartProducts.map(product=><li key={product.id}><CartItem  product={product} addToCart={addToCart} removeFromCart={removeFromCart}/></li>);

      let content;

      let totalPrice=0;

      cartProducts.forEach(product=>totalPrice+=product.count*product.price); //affichage du prix totale il faut il faut bine mettre product.price et non cartProduct.price

         /*for (let v in cartProducts){
            const product=cartProducts[v];
            totalPrice+=cartProducts.count*cartProducts.price
         }*/

      if (displayCartProduct.length===0){
         content=<p>Empty Cart</p>
      }else{
         content=(
         <React.Fragment>
            <h3>Votre Panier:</h3>
            <ul>
               {displayCartProduct}
            </ul>

         </React.Fragment>)
      }



      return(
      <aside>
         {content}
         <p> {totalPrice}</p>
      </aside>
      )
   }
}
