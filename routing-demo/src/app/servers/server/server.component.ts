import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  constructor(private serversService: ServersService, private currentRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.currentRoute.params.subscribe(
      (params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.currentRoute, queryParamsHandling: 'preserve' });
  }

}
