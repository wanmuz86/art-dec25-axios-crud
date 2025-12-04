import React, { useEffect, useState } from 'react'
import { Product } from '../models/Product';
import { fetchProducts } from '../services/ProductService';

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

  return (
    <div>ProductList</div>
  )
}

export default ProductList