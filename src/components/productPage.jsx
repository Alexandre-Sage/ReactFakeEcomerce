import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";


export default function ProductPage(){
   const [product, setProduct]= useState(null); //Création d'un hook d'état ce qui permet de remplacer component did mount et de component did update dans une fonction car on ne peut pas utiliser une state dans une fonction.
   const {productId}= useParams();
   useEffect(()=>{ //Components did mount ne pas mettre a l'intérieur d'un if (à éssayer quand mèmme)
      fetch(process.env.REACT_APP_API_URL+ "products/"+productId) //permet de récuperer l'url de la page demander
         .then(response=>response.json())
         .then(data=>setProduct(data)) //équivalent de this.setState
   }, [productId]) //mettre prodduct id entre corchet permet de prendre un seul produit par chargement.
   if (product===null){
       return <p>Page is loading</p>
   }
      return(
         <div>
            {product.name}
         </div>
      )
   }
