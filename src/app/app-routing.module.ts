import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { WrongentryComponent } from './wrongentry/wrongentry.component';
import { CurdComponent } from './curd/curd.component';
import { ServiceComponent } from './Service/curd.service';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import { ViewComponent } from './View/view.component';
import { UpdateComponent } from './update/update.component';
import { PipeComponent } from './PipeSearch/pipe.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"wrongentry", component:WrongentryComponent},
  {path:"curd", component:CurdComponent},
  {path:"viewdetail/:abc" , component:ViewComponent},
  {path:"update/:xyz" , component:UpdateComponent},
  {path:"**",component:PagenotfoundComponent}


];



@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,HttpClientModule,CommonModule],
  exports: [RouterModule],
  declarations:[LoginComponent, RegisterComponent,WrongentryComponent, CurdComponent,ViewComponent,UpdateComponent,PipeComponent,PagenotfoundComponent
  ],
  providers: [ServiceComponent]

})
export class AppRoutingModule { }
