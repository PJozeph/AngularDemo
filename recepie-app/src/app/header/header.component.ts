import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from "@angular/core";
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth-service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {

  private userSubscription : Subscription;
  isAuthenticated = false;


  constructor(private dataStorageService: DataStorageService, private authService : AuthService) { }
  
  ngOnInit(): void { 
    this.userSubscription = this.authService.user.subscribe( user => {
      this.isAuthenticated = !!user;
    });
  }

  onLogout(){
    this.authService.logout();
  }

  onSaveData() {
    this.dataStorageService.saveRecepies();
  }
  
  onFetchData() {
    this.dataStorageService.fetchData().subscribe();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
  
}
