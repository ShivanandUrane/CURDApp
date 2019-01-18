import { Component} from '@angular/core';
import {ServiceComponent} from '../Service/curd.service';
import {Router} from "@angular/router";
  

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent {
  usersearch;
  data:any=[]
constructor(private service:ServiceComponent , private router:Router)
{
  service.getAll().subscribe((res)=>{
    this.data=res;
  })
}
  

onView(id:any)
  {
     this.router.navigate(["/viewdetail",id])
  }

onDelete(id)
  {
      this.service.deletedata(id).subscribe((res)=>{
      this.data=res;
      window.location.reload();
   })
}

onUpdate(id)
    {
       this.router.navigate(["/update",id])
    }
}
