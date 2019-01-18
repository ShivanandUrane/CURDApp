import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  username;
  userpassword;


 sname = "shiva";
 spassword = "shiva123";

 constructor(private route:Router){}

 onlogin(){
 
   if((this.username==this.sname) &&(this.userpassword==this.spassword)) 
   {
     this.route.navigate(["/curd"])
   }
   
   else

   {
     this.route.navigate(["/wrongentry"])
   }

 }

 onclick(){
  {
    this.route.navigate(["/register"])
  }



 }


}
