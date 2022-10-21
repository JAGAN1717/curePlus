import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems : any = [];


  addTocart(data:any){
    this.cartItems.push(data)
  
  }

  remove(data:any){
    this.cartItems.map((p:any,index:any)=>{
      if(data.id === p.id){
        this.cartItems.splice(index,1);
      }
    })
  }
}
