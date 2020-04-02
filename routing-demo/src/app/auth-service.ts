import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    logedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject)  => {
                setTimeout( ( ()=> {
                    resolve(this.logedIn);
                } ) ,800);
            }
        );
        return promise;
    }

    logIn() {
        this.logedIn = true;
    }

    logOut() {
        this.logedIn = false;
    }

}