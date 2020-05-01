import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.css']
})
export class RecipieEditComponent implements OnInit {

  id: number;
  editMode = false;
  recepieForm : FormGroup;


  constructor(private route: ActivatedRoute, private recepieService : RecepieService) { }


  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.editMode = +param['id'] != null;
      this.init();
    });
  }

  private init() {
    let recepieName = '';
    let recepieImagePath = '';
    let recepieDescription = '';
    let recepieIngredients = new FormArray([]);

    if(this.editMode){
      const recepie = this.recepieService.getRecepieById(this.id);
      recepieName = recepie.name;
      recepieImagePath = recepie.imagePath
      recepieDescription = recepie.description;
      if(recepie['ingredients']) {
        for (let ingridient of recepie.ingredients) {
          recepieIngredients.push(
            new FormGroup({
              'name' : new FormControl(ingridient.name),
              'amount' : new FormControl(ingridient.amount)
            })
          );
        }
      }
    }

    
    this.recepieForm = new FormGroup(
      {
        'name' : new FormControl(recepieName),
        'imagePath' : new FormControl(recepieImagePath),
        'description' : new FormControl(recepieDescription),
        'ingredients' :  recepieIngredients
      }
      );
    }
    
    get controls() { // a getter!
      return (<FormArray>this.recepieForm.get('ingredients')).controls;
    }
    
  onSubmit() {
    console.log(this.recepieForm)
  }

  addIngredient() {
    (<FormArray>this.recepieForm.get('ingredients')).push(
     new FormGroup({
      'name' : new FormControl(),
      'amount' : new FormControl()
     })
    );
  }

}
