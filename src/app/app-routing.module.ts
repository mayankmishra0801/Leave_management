import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLaeaveComponent } from './apply-laeave/apply-laeave.component';

const routes: Routes = [
  {path:'',component:ApplyLaeaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
