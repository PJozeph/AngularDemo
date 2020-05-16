import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostServcie } from './post.service';
import { AuthenticationInterceptorService as AuthInterceptorService } from './auth-interceptor.serivce';
import { LoginInterceptorService } from './login-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [PostServcie, 
    {provide : HTTP_INTERCEPTORS , useClass : AuthInterceptorService, multi :true},
    {provide : HTTP_INTERCEPTORS , useClass : LoginInterceptorService, multi :true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
