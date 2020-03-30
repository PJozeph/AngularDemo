import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service'
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // how dependeny injection
  constructor(private logginfService : LoggingService, private accountService : AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.logginfService.logStatusChange(accountStatus);
  }
}
