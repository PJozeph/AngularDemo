import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecepieService } from '../recepie.service';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.css']
})
export class RecipieEditComponent implements OnInit {

  id: number;
  editMode = false;
  recepieForm: FormGroup;


  constructor(private activatedRoute: ActivatedRoute ,private router : Router ,private recepieService: RecepieService) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.editMode = param['id'] != null;
      this.init();
    });
  }

  private init() {
    let recepieName = '';
    let recepieImagePath = '';
    let recepieDescription = '';
    let recepieIngredients = new FormArray([]);

    if (this.editMode) {
      const recepie = this.recepieService.getRecepieById(this.id);
      recepieName = recepie.name;
      recepieImagePath = recepie.imagePath
      recepieDescription = recepie.description;
      if (recepie['ingredients']) {
        for (let ingridient of recepie.ingredients) {
          recepieIngredients.push(
            new FormGroup({
              'name': new FormControl(ingridient.name, Validators.required),
              'amount': new FormControl(ingridient.amount, [
                Validators.required,
                Validators.pattern('')
              ])
            })
          );
        }
      }
    }

    this.recepieForm = new FormGroup(
      {
        'name': new FormControl(recepieName, Validators.required),
        'imagePath': new FormControl(recepieImagePath, Validators.required),
        'description': new FormControl(recepieDescription, Validators.required),
        'ingredients': recepieIngredients
      }
    );
  }

  get controls() { // a getter!
    return (<FormArray>this.recepieForm.get('ingredients')).controls;
  }

  onSubmit() {
    const newRecepie = new Recepie(
      this.recepieForm.value['id'],
      this.recepieForm.value['name'],
      this.recepieForm.value['description'],
      this.recepieForm.value['imagePath'],
      this.recepieForm.value['ingredients'],
      )

    if (this.editMode) {
      this.recepieService.updateRecepie(this.id, newRecepie)
    } else {
      this.recepieService.addRecepie(newRecepie);
    }
    this.onCancel();
  }

  addIngredient() {
    (<FormArray>this.recepieForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern('')])
      })
    );
  }
  onCancel() {
    this.recepieForm.reset();
    this.router.navigate(['../'], {relativeTo : this.activatedRoute});
  }

  deleteIngredient(index : number) {
    (<FormArray>this.recepieForm.get('ingredients')).removeAt(index);
  }

}
