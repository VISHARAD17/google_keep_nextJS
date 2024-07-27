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
