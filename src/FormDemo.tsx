import React, {useState} from 'react'



const FormDemo = () => {

    // A state of type object to store the form data
        const [formData,setFormData] =  useState({title:'',description:'',image:''});
    
        const handleSubmit = ()=> {
            
        }
        const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
            // e -> event
            // e.target -> input / textarea
            // e.target.value= > value
            // 
            const {name, value} = e.target;
            // const name = e.target.name
            // const value = e.target.value

            // setFormData -> Update the FormData State
            // {title:'abc', description:''}
            // {title:'abc', description:''}. 
            // Using {... , description: 'a good product'}

            setFormData((prevFormData)=> ({...prevFormData, [name]:value}));
        }
    
  return (
    <div>
        <form  onSubmit={handleSubmit} style={{display:'grid', gap:12}}>
        <div>
        <label htmlFor="title">Title</label>
        <input type="text" value={formData.title} onChange={handleChange} required name="title"/>
        </div>
  
        <div>
            <label htmlFor="image">Image URL</label>
            <input type="text" value={formData.image} onChange={handleChange} name="image" />
        </div>
        <label htmlFor="description">
            Description
            {/* <textarea value={formData.description} rows={4} onChange={handleChange} name="description"></textarea> */}
        </label>
        </form>
    </div>
  )
}

export default FormDemo