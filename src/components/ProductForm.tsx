import React, {useState} from 'react'
import type { Product } from '../models/Product'
import type { ProductInput } from '../services/ProductService';

type Props = {
    // scenario of edit, edit will pass the initial value, for create it will be null

    inital?:Partial<Product>;
    // Calback function to pass the form input by user to the component Edit/Add
    onSubmit:(values:ProductInput)=> Promise<void>|void;
    submitLabel?:string; // Edit or Add to be shown on the button
}

// ShareableForm used by ProductCreate and ProductEdit
// prop destuctured
const ProductForm:React.FC<Props> = ({initial, onSubmit, submitLabel='Save'}) => {
    // the state to store the value from the form
    const [title, setTitle] = useState<string>(initial?.title ?? '');
    const [price, setPrice] = useState<number>(initial?.price ?? 0);
    const [image, setImage] = useState<string>(initial?.image ?? '');
    const [description, setDescription] = useState<string>(initial?.description ?? '');
    
    //Loading... for the button
    const [busy, setBusy] = useState<boolean>(false);

  return (
    <form>
        <div>
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="price">Price</label>
            <input type="number" value={price} onChange={(e)=> setPrice(Number(e.target.value))} required/>
        </div>
        <div>
            <label htmlFor="image">Image URL</label>
            <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} />
        </div>
        <label htmlFor="description">
            Description
            <textarea value={description} rows={4} onChange={(e)=>setDescription(e.target.value)}></textarea>
        </label>
        <button type="submit" disabled={busy}>{busy ? 'Saving...' : submitLabel }</button>
    </form>
  )
}

export default ProductForm