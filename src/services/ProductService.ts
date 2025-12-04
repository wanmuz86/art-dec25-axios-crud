// Is the file that will be responsible for the API call
// A way to stucture the code so that all API Call is managed and does not depend on the component/pages

import { api } from "../api"
import type { Product } from "../models/Product";

// the form data retrieved from the component ,
// from product, we select/pick some of the property
// Pick - From Product, select the defined properties / subset of
export type ProductInput = Pick<Product, 'title'|'price'|'image'|'description'> & {category?:string};
// Create

export const createProduct = async (data:ProductInput) : Promise<Product>=> {
    const res = await api.post('/products', {...data, category:'misc'});
    return res.data;

}


// GET all
// The return type is a Promise that will return Product[]

// A Promise is an object in JavaScript used to handle asynchronous operations.
// An API call usually returns a Promise.
// A Promise has three states:
// - pending
// - fulfilled (success)
// - rejected (failure)

export const fetchProducts = async() : Promise<Product[]> => {
    // 
    // Use the singleton API object to call the  https://www.fakestoreapi.com/products
    // The API will return Promise of Array<Product> or Product[]
    const res = await api.get<Product[]>('/products');
    return res.data; // return it to the component
}


// Get by id
// Use the singleton API object to call the  https://www.fakestoreapi.com/products/1
// The API will return Promisise of Product
export const fetchProduct = async (id:number) : Promise<Product> => {
// id = 1  - Interpolation ``
// `/products/${id}` - retieve the value of id
    const res = await api.get<Product>(`/products/${id}`);
    return res.data;
}


// Update


// Delete