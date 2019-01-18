import { Component} from '@angular/core';
import {ServiceComponent} from "../Service/curd.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  datas:any=[];

  receive:any[]

  data={};

  save=false;

  constructor(private service:ServiceComponent , private router:Router)
  {
      service.getAll().subscribe((res)=>{
        this.receive=res
      })
  }

  onSave(value:any)
   {
      this.save=true;
      this.data=value;
      this.service.postdata(this.data).subscribe((res)=>
    {
       this.datas=res;
    })
    
    window.location.reload();
  }
  
  onLogin()
  {
   this.router.navigate(["/login"])
  }

}
