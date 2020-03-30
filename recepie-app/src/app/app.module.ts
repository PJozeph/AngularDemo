import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./header/header.component";
import { RecepiesComponent } from "./recepies/recepies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecepieDetailComponent } from "./recepies/recepie-detail/recepie-detail.component";
import { RecepieListComponent } from "./recepies/recepie-list/recepie-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecepieItemComponent } from "./recepies/recepie-list/recepie-item/recepie-item.component";
import { ProgressbarModule } from '@bit/valor-software.ngx-bootstrap.progressbar';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ProgressbarModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
