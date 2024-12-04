// interfaces for all the objects used in the project

export type Invoice = {
    id:string;
    customer_id:string;
    amount:number;
    date:string;
    status:'pending' | 'paid';
}; 

export interface Tag {
  id:number;
  name:string;
  userId: string;
}

export interface User  {
    id:number;
    name:string;
    email: string
    password: string
    tags: [Tag]
}

export interface Note {
  id:number;
  title:string;
  content:string;
  userId: number;
  tags:[Tag]
}
