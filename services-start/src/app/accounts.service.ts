import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {

    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    constructor(private logginfService: LoggingService) { }

    statusUpdated = new EventEmitter<string>()

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.logginfService.logStatusChange(status);
    }

    updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.logginfService.logStatusChange(newStatus);
    }

}