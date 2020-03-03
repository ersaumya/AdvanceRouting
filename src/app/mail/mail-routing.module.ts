import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailFolderResolve } from './container/mail-folder/mail-folder.resolve';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailFolderComponent } from './container/mail-folder/mail-folder.component';


export const ROUTES: Routes = [
    { 
        path: 'folder/:name', 
        component: MailFolderComponent,
        resolve:{
            messages:MailFolderResolve
        } 
    },
    {
        path:'message/:id',
        component:MailViewComponent,
        outlet:'pane'
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class MailRoutingModule { }