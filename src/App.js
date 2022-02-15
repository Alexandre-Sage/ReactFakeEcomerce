//Import du routage dans le fichier index.js

import { Component } from 'react';
import {Routes, Route} from "react-router-dom";
import './App.scss';
import "./components/Porduct.scss"
import "./components/Cart.scss"
import "./components/CartItem.scss"
import ProductList from './components/ProductList.jsx';
import Cart from "./components/Cart.jsx";
import ProductPage from "./components/productPage.jsx"

class App extends Component {
//Les import ne props ne sont pas modifiable dans le composant, les states par contre sont modifiable a l'intérieur du composant.
  constructor(props) {
    super(props);
    this.state = {
      products: [], //Un tableau pour les produits a afficher sur la page.
      cartProducts: [] //Un tableua pour les produits ajouter au panier.
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL+'products?page=1')
      .then(response => response.json())
      .then(data => this.setState({ products: data['hydra:member'] })) //on réupere l'api ici et on la place dans le state de app.js qui contenais la liste product vide
  }
   //Mise en place de la fonction pour ajouter les produits choisi au panier.
   addToCart(product){

      const productFind= this.state.cartProducts.find(choosenProduct=> choosenProduct.id ===product.id);

      if(productFind){ //lorsque le produit est déja présent au moins une fois dans le panier
      this.setState({cartProducts: this.state.cartProducts.map(choosenProduct=>{

         if(choosenProduct.id ===product.id){
         choosenProduct.count++;} return choosenProduct; //lorsqu'une fonction flécher est écrite sur plusieur ligne il faut spécifier le return
      })})

   }else{ //Lorque le produit n'a pas déja été ajouter au panier
      product.count= 1;
      this.setState({cartProducts: [...this.state.cartProducts, product]});  //permet d'ajouter les produit choisi a la liste cart Product on passe ensuite la fonction dans ProductList pour effecuter le transfert jusqu'au composant Product
      }
   } //Fin e la fonction add

   removeFromCart(product){
      const productFind= this.state.cartProducts.find(choosenProduct=> choosenProduct.id ===product.id);
      if (productFind){
         if (productFind.count>1){
            product.count--;
            this.setState({
               cartProducts: this.state.cartProducts.map(removeProduct=>{
                  if (removeProduct.id===product.id){
                     return product;
                  }
                     return removeProduct
               })
            })
         }else{
            this.setState({cartProducts: this.state.cartProducts.filter(p=>p.id !== product.id)});
         }
      }
   }
  render() {
    return (
      <div className="toor">
      <main>

         <Routes> {/*ajoute une route a l'url de l'élément product*/} List
            <Route path="/" element={<ProductList  products={this.state.products} addToCart={(product)=> this.addToCart(product)}/>}/>
            <Route path="/product/:productId" element={<ProductPage/>}/> {/*Ajout de la route vers les page produits*/}
         </Routes>
   </main>


         <Cart cartProducts={this.state.cartProducts} addToCart={(product)=> this.addToCart(product)} removeFromCart={product=>this.removeFromCart(product)}/>

      </div>
    );
  }

}

export default App;
