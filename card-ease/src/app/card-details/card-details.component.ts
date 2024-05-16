import { Component, OnInit } from '@angular/core';
import { CardDetailService } from '../shared/card-detail.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styles: ``
})
export class CardDetailsComponent implements OnInit {

  constructor(public service: CardDetailService) {

  }

  ngOnInit(): void {
    this.service.refreshList();
  }
}
