import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService, private recepieService: RecepieService, private activatedRoute: ActivatedRoute, private router : Router) { }

  selectedRecepie: Recepie;



  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.selectedRecepie = this.recepieService.getRecepieById(+params['id']);
    });
  }

  addToShoppongList(recepie) {
    this.shoppingListService.addAll(recepie.ingredients);
  }

  updateRecepie(selectedRecepie) {
    this.router.navigate(['edit'], {relativeTo : this.activatedRoute});
  }

  eleteRecepie() {
    this.recepieService.deleteRecepie(this.selectedRecepie.id)
  }

  deleteRecepie() {
    this.recepieService.deleteRecepie(this.selectedRecepie.id);
    this.router.navigate(['/recepies']);
  }

}
