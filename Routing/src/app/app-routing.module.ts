import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent} from './list/list.component';
import { HomeComponent} from './home/home.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { ListDetailComponent } from './list/list-detail/list-detail.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"}, //這裡是真的將url導向Home
  {path:"home",component:HomeComponent},
  {path:"list",component:ListComponent},
  {path:"list/:id",component:ListDetailComponent}, 


  {path:"**",component:ErrorHandleComponent}//強制導回Home，這不是真的導向Home，只是Response (**=萬用字)，這行一定要放在最後面，表示完全沒有比較到的才導向這一頁

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
