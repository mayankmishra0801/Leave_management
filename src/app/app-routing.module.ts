import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLaeaveComponent } from './apply-laeave/apply-laeave.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import { UpdateComponentComponent } from './update-component/update-component.component';

const routes: Routes = [
  {path:'',component:ApplyLaeaveComponent},
  {path:'viewleave',component:ViewLeaveComponent},
  {path:'updateleave',component:UpdateComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
