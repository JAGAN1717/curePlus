import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router ,Routes } from "@angular/router"
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor(private router: Router,private httpService : HttpService ) {
    localStorage.setItem("status",'false');
  }

  ngOnInit(): void {
  }
 
  data : any
  
  onsubmit( userForm : NgForm){
    console.log("onsubmit --------",userForm.form)
    this.data = userForm.form.value
    console.log("name",)
    // this.router.navigate(['home'],{state:{data:"jagan"}})
    this.httpService.register(this.data).subscribe(res=>{
      console.log("res",res.result.LaginStatus);
      localStorage.setItem('status','true');
      window.location.reload();
    })
  }



  

}
