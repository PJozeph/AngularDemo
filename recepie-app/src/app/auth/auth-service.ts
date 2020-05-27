import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registrated?: boolean;
}


@Injectable()
export class AuthService {

    constructor(private httpClient: HttpClient, private router: Router) { }

    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    signUp(email: string, password: string) {
        return this.httpClient
            .post<AuthResponseData>(
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaQs4m3Ca2XL85n5mdBLZtszz01T0tQD8",
                { email: email, password: password, returnSecureToken: true }
            ).pipe(catchError(this.handleError), tap(reponse => {
                this.handleAuthentication(
                    reponse.email,
                    reponse.localId,
                    reponse.idToken,
                    +reponse.expiresIn);
            }));
    }

    // tap operator allows us to perform some action without change the input
    login(email: string, password: string) {
        return this.httpClient.post<AuthResponseData>(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCaQs4m3Ca2XL85n5mdBLZtszz01T0tQD8",
            { email: email, password: password, returnSecureToken: true }
        ).pipe(catchError(this.handleError), tap(reponse => {
            this.handleAuthentication(
                reponse.email,
                reponse.localId,
                reponse.idToken,
                +reponse.expiresIn);
        }));
    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
    }

    autoLogin() {
        const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationDate));

        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getDate() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    autoLogout(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(
            () => this.logout(),
            expirationDuration)
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMessage = "An unknow error Occured";
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorResponse);
        }
        switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS': errorMessage = "This email exists alredy !";
                break;
            case 'EMAIL_NOT_FOUND': errorMessage = "This email does not exists !";
                break;
            case 'INVALID_PASSWORD': errorMessage = "Invalid Password !";
        }
        return throwError(errorMessage);
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirattionDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(
            email,
            userId,
            token,
            expirattionDate);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000)
        localStorage.setItem('userData', JSON.stringify(user));
    }

}