import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  category :any
  constructor( private httpService : HttpService,private Cart : CartService ) {
    console.log('hel',history.state.data)
   this.category = history.state.data
   }

  ngOnInit(): void {
    
  if(this.category){
    this.categoryBassed();
  }else{
    this.getproduct();
  }


  }

  

  productList :any
  getproduct(){
    const token = localStorage.getItem('token');
    this.httpService.product(token).subscribe(res=>{
      console.log('Product',res.result);
      this.productList = res.result
    })
  }

  categoryBassed(){
    const id = this.category.id
    this.httpService.categoryBassed(id).subscribe(res=>{
      console.log("cate",res);
      this.productList = res.result
    })
  }

  addtocart(data:any){
    // console.log("added",data)
    this.Cart.addTocart(data);
    console.log('tocart',this.Cart.cartItems);
  }


  // userdata : any
  getData(){
    // this.service.getuser().subscribe(res=>{
    //   console.log("res",res.result)
    //   this.userdata = res.result
    // })
  }

}
