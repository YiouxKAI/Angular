import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GetOpenDataComponent } from './get-open-data/get-open-data.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"Profile",component:ProfileComponent},
  {path:"ContactUs",component:ContactUsComponent},
  {path:"GetOpenData",component:GetOpenDataComponent},
  {path:"ToDoList",component:ToDoListComponent},
  {path:"**",component:ErrorHandleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
