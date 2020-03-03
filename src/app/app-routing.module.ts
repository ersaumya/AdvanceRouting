import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy, Route, preload } from '@angular/router';
import { Observable,of } from 'rxjs';

/* custom preload */
export class CustomPreload implements PreloadingStrategy{
  preload(route:Route,fn:()=>Observable<any>):Observable<any>{
    return route.data && route.data.preload ? fn(): of(null);
  }
}

export const mainRoutes: Routes = [
  { path:'dashboard',data:{preload:true},
  loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes, { preloadingStrategy: CustomPreload})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
