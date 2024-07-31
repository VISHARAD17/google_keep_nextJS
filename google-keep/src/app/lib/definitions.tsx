import { warn } from "console";

export type Invoice = {
    id:string;
    customer_id:string;
    amount:number;
    date:string;
    status:'pending' | 'paid';
}; 

export type Book = {
  id: number;
  name: string;
  author: string;
}

export interface User  {
    id:number;
    name:string;
    email: string
    password: string
}
