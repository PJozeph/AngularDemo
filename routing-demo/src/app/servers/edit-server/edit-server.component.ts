import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanDeactivateGuard, CanComponentDeactivate } from './can-deactivate-service.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changedIsSaved = false;

  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute, private router: Router) { }


  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && (!this.changedIsSaved)) {
      return confirm('Do you want to discar the changes?')
    } else {
      true;
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.server = this.serversService.getServer(Number(params['id']));
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.allowEdit = params['allowEdit'] === '1' ? true : false;
      }
    );

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changedIsSaved = true;
  }

}
