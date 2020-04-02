import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private currentActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.currentActivatedRoute.snapshot.params['id'],
      name: this.currentActivatedRoute.snapshot.params['name']
    };
    this.currentActivatedRoute.params.subscribe((params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }
}
