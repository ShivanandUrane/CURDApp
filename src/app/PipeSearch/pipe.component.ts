import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"spipe"
})
export class PipeComponent implements PipeTransform
{
    transform(value:any,givesearch:any)
    {   
        
         if(!givesearch) return value;

         return value.filter((res)=>{
             return res.id.toString().toLowerCase().includes(givesearch.toString().toLowerCase())
             ||  res.name.toString().toLowerCase().includes(givesearch.toString().toLowerCase())
             || res.salary.toString().toLowerCase().includes(givesearch.toString().toLowerCase())
             || res.email.toString().toLowerCase().includes(givesearch.toString().toLowerCase())
             || res.age.toString().toLowerCase().includes(givesearch.toString().toLowerCase())
         })
    }

}