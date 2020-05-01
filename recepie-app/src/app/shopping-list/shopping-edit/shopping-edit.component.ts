import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subScription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('formElement', { static: false }) fromElement: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subScription = this.shoppingListService.startEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngeredient(index);
        this.fromElement.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subScription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    var value = form.value;
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, new Ingredient(value.name, value.amount));
    } else {
      this.shoppingListService.addIngridient(new Ingredient(value.name, value.amount));
    }
    this.editMode = false;
    form.reset();
  }
  
  clearForm(form: NgForm) {
    form.reset();
    this.editMode = false;
  }

  deleteElement(form: NgForm) {
    this.shoppingListService.deleteElement(this.editedItemIndex);
    this.editMode = false;
    form.reset();
  }


}
