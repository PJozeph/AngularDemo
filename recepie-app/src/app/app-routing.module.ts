import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { SelectRecepieMessageComponent } from './recepie-list/select-recepie-message/select-recepie-message.component';
import { RecipieEditComponent } from './recepies/recipie-edit/recipie-edit.component';
import { RecepieResolverService } from './recepies/recepies-resolver.service';


const routes: Routes = [
  { path: '', redirectTo: '/recepies', pathMatch: 'full' },
  {
    path: 'recepies', component: RecepiesComponent, children: [
      { path: '', component: SelectRecepieMessageComponent },
      { path: 'new', component: RecipieEditComponent },
      { path: ':id', component: RecepieDetailComponent , resolve : [RecepieResolverService] },
      { path: ':id/edit', component: RecipieEditComponent, resolve : [RecepieResolverService] },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
