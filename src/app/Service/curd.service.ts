import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class ServiceComponent
{


private url:string="http://localhost:3000/Register";
constructor(private http:HttpClient)
{
      
}

getAll():Observable<any>
 {
   return this.http.get(this.url)
 }


postdata(user:any):Observable<any>
  {
    return this.http.post(this.url,user);
  }


deletedata(id)
  {
    return this.http.delete(this.url+'/'+id)
  }


updateuser(user)
  {
    return this.http.put(this.url+'/'+user.id,user)
  }


}