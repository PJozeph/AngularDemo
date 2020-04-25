import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("formElement", { static: false }) form: NgForm;

  defaultQuestion = "pet";
  answer = "";
  genders = ["male", "female"];
  submitted = false;
  user = {
    userName: "",
    userEmail: "",
    userGender: "",
    userQuestionAnswer: "",
    userSecret: ""
  };

  suggestUserName() {
    const suggestedName = "Superuser";
  }

  onSubmit(formElement: NgForm) {
    this.submitted = true;
    console.log(formElement.value.userData)
    this.user.userEmail = formElement.value.userData.email;
    this.user.userName = formElement.value.userData.username;
    this.user.userSecret = formElement.value.userData.questionAnswer;
    this.user.userSecret = formElement.value.userData.secret;
  }
}
