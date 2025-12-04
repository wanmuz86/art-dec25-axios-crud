import React from 'react'
import ProductForm from '../components/ProductForm'
import { createProduct } from '../services/ProductService'
import { useNavigate } from 'react-router-dom'

const ProductCreate: React.FC = () => {
    // Callback function that will be called from the 'Shared' Form
    // typeof createProduct> = > parameters from the method createProduct in our service
    // ProductInput

    const navigate = useNavigate()
    const handleSubmit = async (values: Parameters<typeof createProduct>[0]) => {
        try {
            const created = await createProduct(values);
            console.log(created); //check the data returned from the API
            navigate(`/products/${created.id}`);
        } catch (e:any){
            alert(e?.message || 'created failed')
        }
    }
  return (
    <div>
        <h2>Create Product</h2>
        <ProductForm onSubmit={handleSubmit} submitLabel='Create'/>
    </div>
  )
}

export default ProductCreate