import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import type { Product } from '../models/Product';
import { fetchProduct } from '../services/ProductService';
import { Link } from 'react-router-dom';
const ProductDetails = () => {

    // We need retrieve the params /:id -> Then only we call the APi using service
const {id} = useParams();

const [item, setItem] = useState<Product | null>(null);
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);

const fetchData = async (id:string) =>{
    setLoading(true)
    try {
        const data = await fetchProduct(Number(id)); // Number -> Transform string to number
        setItem(data);
    } catch  {
        setError('error');

    } finally {
        setLoading(false);
    }
}

useEffect(()=>{
    if (!id) return
    fetchData(id);
},[id]);


    if (loading) return <p>Loading....</p>
    if (!item) return <p>Item not found</p>
  return (
   
    <div>
           { error  && <p style={{color:'crimson'}}>Error: {error}</p>}
          
           <h2>{item.title}</h2>
           <p>$ {item.price}</p>
             {item.image && <img src={item.image} alt={item.title} width={200} />}
             <p style={{ whiteSpace: 'pre-wrap' }}>{item.description}</p>
             <Link to={`/products/${item.id}/edit`}>Edit</Link>

    </div>
  )
}

export default ProductDetails