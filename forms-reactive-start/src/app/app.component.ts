import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm : FormGroup;
  forbiddenNames = ['Pallagi', 'Nagy'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null, [Validators.required,this.checkforbiddenNames.bind(this)]),
        'email' : new  FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender' : new FormControl('male'),
      'hobbies': new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  addHobby() {
    const hobby = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(hobby);
  }

  checkforbiddenNames(control : FormControl) : { [s: string] : boolean } {
    if(this.forbiddenNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

}
