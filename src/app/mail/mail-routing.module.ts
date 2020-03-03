import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailFolderResolve } from './container/mail-folder/mail-folder.resolve';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailFolderComponent } from './container/mail-folder/mail-folder.component';
import { MailViewResolve } from './components/mail-view/mail-view.resolve';


export const ROUTES: Routes = [
    {
        path:'mail',
        component:MailAppComponent,
        children:[
            {
                path: 'folder/:name',
                component: MailFolderComponent,
                resolve: {
                    messages: MailFolderResolve
                }
            },
            {
                path: 'message/:id',
                component: MailViewComponent,
                outlet: 'pane',
                resolve: {
                    message: MailViewResolve
                }
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class MailRoutingModule { }