import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router,private httpService : HttpService) {
    // console.log('hel',history.state.data)
   }

  ngOnInit(): void {
    this.getCategory();
  }
  
category : any;

  getCategory(){
    this.httpService.category().subscribe(res=>{
      console.log("cat",res.result);
      this.category = res.result
    })
  }

  // visit(){
  //   this.router.navigate(['product'],{state:{data:this.category}})
  // }

}
