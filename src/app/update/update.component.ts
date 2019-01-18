import { Component } from "@angular/core";
import {ServiceComponent} from "../Service/curd.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";

@Component({
    selector:"my-update",
    templateUrl:"./update.component.html",
    styleUrls:["./update.component.css"]
})
export class UpdateComponent
{

    data:any=[];

    selectedid;

    updated=false;

constructor(private activatedroute:ActivatedRoute, private service:ServiceComponent,private router:Router)
{
   service.getAll().subscribe((res)=>{
       this.data=res;
   })

   activatedroute.params.subscribe((params)=>{
       this.selectedid=Number(params["xyz"]);
   })
}

onSaveUpdate(value:any)
{
    this.service.updateuser(value).subscribe((res)=>{
        this.data=res;
    })
    this.updated=true;
}

onBack()
  {
    this.router.navigate(["/curd"])
  }

}
