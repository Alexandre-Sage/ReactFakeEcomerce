import {Component} from 'react'

export default class CartItem extends Component{
   render(){
      const {product, addToCart, removeFromCart}= this.props;
      return(
      <article>
         <div className="ctnImg"  >
            <img className="imgCart" src={process.env.REACT_APP_API_URL+product.image.contentUrl} alt="" />
         </div>
         <div>
            <h3>{product.name}</h3>
            <p className="price">Prix: {product.price}</p>
            <p>
               Qty: {product.count}
               <button className="cartButton" onClick={()=>addToCart(product)}>+</button>
               <button className="cartButton" onClick={()=>removeFromCart(product)}>-</button>

            </p>
         </div>
      </article>
      )
   }
}
