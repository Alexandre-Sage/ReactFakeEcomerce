import { Component } from 'react';
import {Link} from "react-router-dom";
//On récupere ici la fonction addToCart que l'on assigne a l'argument onClick dans le bouton
export default class Product extends Component {

      render() {
         const {product, addToCart}=this.props;
         return (
            <article className="productCard">
               <h2> {product.name}</h2>
               <img src={process.env.REACT_APP_API_URL+product.image.contentUrl} className="productImage" alt="produit"/>
               <p className="description">{product.stock}</p>
               <p>{product.price.toLocaleString("fr-FR", {style: "curency", currency: "EUR"})}$</p>
               <button onClick={()=>addToCart(product)}>Add To Cart</button>
               <Link to={"/product/"+product.id}>Voir plus </Link>
            </article>
       )
   }
}
//Remplacer la balise div principale par une balise article peut ètre intéréssant
//Le composant link sert a établir la route URL de la page dans ce cas la route utilisera l'id du produits
