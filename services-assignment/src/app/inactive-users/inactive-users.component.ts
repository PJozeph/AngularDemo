import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

constructor(private userService : UserService) {}

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
