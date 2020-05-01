import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
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

    if(this.editMode){
      const recepie = this.recepieService.getRecepieById(this.id);
      recepieName = recepie.name;
      recepieImagePath = recepie.imagePath
      recepieDescription = recepie.description;
    }

    this.recepieForm = new FormGroup(
      {
        'name' : new FormControl(recepieName),
        'imagePath' : new FormControl(recepieImagePath),
        'description' : new FormControl(recepieDescription)
      }
    );
  }

}
