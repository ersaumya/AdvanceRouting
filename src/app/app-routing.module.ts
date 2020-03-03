import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


export const mainRoutes: Routes = [
  { path:'dashboard',
  loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes /*, {enableTracing:true} */,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
