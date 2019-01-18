import { Component } from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ServiceComponent} from "../Service/curd.service"
import {Router} from "@angular/router";
    
@Component({
    selector:"my-view",
    templateUrl:"./view.component.html",
    styleUrls:["./view.component.css"]
})
export class ViewComponent
{
    selectedid;

    data=[];
    
constructor(private activatedrouter:ActivatedRoute, private service:ServiceComponent,private router:Router)
{
    activatedrouter.params.subscribe((param)=>{
    this.selectedid=Number(param["abc"]);
    })

    service.getAll().subscribe((res)=>{
        this.data=res;
    })

}

onBack()
  {
    this.router.navigate(["/curd"])
  }

onPrev()
  {
    this.router.navigate(["/viewdetail",this.selectedid-1])
  }

onNext()
 {
    this.router.navigate(["/viewdetail",this.selectedid+1])
 }

}