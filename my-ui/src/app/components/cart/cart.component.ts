import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService : CartService) { }

  cartProduct : any = []

  ngOnInit(): void {
 

    this.cartProduct = this.cartService.cartItems;

    console.log("cartpage",this.cartProduct);

  }




}
