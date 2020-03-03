import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const mainRoutes: Routes = [
  { path:'dashboard',
  loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes /*, {enableTracing:true} */)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
