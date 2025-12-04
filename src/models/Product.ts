// Model/Interface/Structure of data received from the server

export interface Product {
    id: number;
    titile:string;
    price:number;
    image:string;
    description:string;
    category?:string // ? might be there/might not be there -> Optiona;
}