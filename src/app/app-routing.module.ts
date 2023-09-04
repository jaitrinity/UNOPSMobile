import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompleteTaskComponent } from './complete-task/complete-task.component';


const routes: Routes = [
  {path : '' ,  redirectTo: '/complete-task', pathMatch: 'full'},
  {path : 'complete-task', component :CompleteTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
