import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./header/header.component";
import { RecepiesComponent } from "./recepies/recepies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecepieDetailComponent } from "./recepies/recepie-detail/recepie-detail.component";
import { RecepieListComponent } from "./recepies/recepie-list/recepie-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecepieItemComponent } from "./recepies/recepie-list/recepie-item/recepie-item.component";
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { SelectRecepieMessageComponent } from './recepie-list/select-recepie-message/select-recepie-message.component';
import { RecipieEditComponent } from './recepies/recipie-edit/recipie-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecepieListComponent,
    RecepieDetailComponent,
    RecepieItemComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    DropdownDirective,
    SelectRecepieMessageComponent,
    RecipieEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
