import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { AuthenticationGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-service.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoute: Routes = [
    { 'path': '', component: HomeComponent },
    {
        'path': 'users', component: UsersComponent, children: [
            { 'path': ':id/:name', component: UserComponent }
        ]
    },
    {
        'path': 'servers', canActivateChild: [AuthenticationGuard], component: ServersComponent, children: [
            { 'path': ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGuard] },
            { 'path': ':id', component: ServerComponent, resolve : {server : ServerResolver} }
        ]
    },
    // { 'path': 'page-not-found', component: PageNotFoundComponent },
    { 'path': 'page-not-found', component: ErrorPageComponent, data: {message : 'Page not found (passed as static parameter)'} },
    { 'path': '**', redirectTo: 'page-not-found' }
]

// **  means that everything which is not among the paths
// servers => localhost:2400/servers
// users/:id will triger for localhost:2400/user/something too
@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})
export class AppRoutingModuel {

}