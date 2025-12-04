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
    // Error handling check form is filled or not
    const [busy, setBusy] = useState<boolean>(false);

  return (
    <div>ProductForm</div>
  )
}

export default ProductForm