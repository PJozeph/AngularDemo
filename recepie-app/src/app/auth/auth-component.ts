import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth-service';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth-component.html',
    styleUrls: ['./auth-component.css']
})
export class AuthComponent {

    isLogedInMode = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService, private route : Router) { }

    onSwitchMode() {
        this.isLogedInMode = !this.isLogedInMode;
    }

    onSubmit(ngForm: NgForm) {
        if (!ngForm.valid) {
            return;
        }
        const email = ngForm.value.email;
        const password = ngForm.value.password;

        let authObservable: Observable<AuthResponseData>;

        this.isLoading = true;
        if (!this.isLogedInMode) {
            authObservable = this.authService.login(email, password);
        } else {
            authObservable = this.authService.signUp(email, password);
        }

        authObservable.subscribe(
            response => {
                console.log(response);
                this.isLoading = false;
                this.route.navigate(['/recepies'])
            }, errorReponse => {
                this.error = errorReponse;
                console.log(errorReponse)
                this.isLoading = false;
            }
        );
        ngForm.reset();
    }

}