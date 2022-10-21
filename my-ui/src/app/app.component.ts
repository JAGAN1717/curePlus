import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ui';
constructor(public auth : AuthService){
  
}
 

ngOnInit(): void {
 
}


  loginstatus : any = localStorage.getItem('status');

  

}
