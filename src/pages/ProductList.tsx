import React, { useEffect, useState } from 'react'
import type { Product } from '../models/Product';
import { fetchProducts } from '../services/ProductService';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [items, setItems] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string | null>(null);

    // retrive data from API

    const loadData = async () => {
        setLoading(true)
        try {
            const data = await fetchProducts()
            setItems(data);
        }
        catch (error){
            setError('Error fetch data')
        }
        finally {
            setLoading(false);

        }
    }
    // when the page is loaded / retrieve the data from API
    
    useEffect(()=>{
        loadData();
    },[]);

    if (loading) return <p>Loading....</p>

  return (
    <div>
        { error && <p style={{color:'crimson'}}>Error: {error}</p>}
        <ul style={{display:'grid', gap:12, marginTop:12, padding:0,listStyle:'none'}}>
            {
                items.map((p)=> (
                    // key is compulsary when creating a list
                    // key needs to be unique, normally you will bind the id from API/ DB to the key
                    <li key={p.id} style={{border:'1px solid #ddd', borderRadius:8, padding:12}}>
                        <strong>{p.title} - $ {p.price}</strong>
                        <div style={{marginTop:8, display:'flex', gap:8}}>
                            <Link to={`/products/${p.id}`}>View</Link>
                            <Link to={`/products/${p.id}/Edit`}>Edit</Link>
                            <button>Delete</button>
                        </div>
                    </li>

                ))
            }
        </ul>

    </div>
  )
}

export default ProductList