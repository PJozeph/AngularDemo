import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];
  numberOfChange = 0 ;

  constructor(private userService : UserService, private counterService : CounterService) {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.numberOfChange = this.counterService.getCounter();
  }

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }

  getNumberOfStatusChnage() {
    return this.counterService.getCounter();
  }

}
