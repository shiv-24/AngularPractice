import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountsService{

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

      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService: LoggingService){}

      addAccount(newAccount: {name: string, status: string}){
          this.accounts.push(newAccount);
          this.loggingService.logStatusChange(newAccount.status);
      }

      updateStatus(updateInfo: {id: number, newStatus: string}) {
        this.accounts[updateInfo.id].status = updateInfo.newStatus;
        this.loggingService.logStatusChange(updateInfo.newStatus);
        this.statusUpdated.emit(updateInfo.newStatus);
      }
}