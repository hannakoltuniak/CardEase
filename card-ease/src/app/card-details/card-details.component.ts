import { Component, OnInit } from '@angular/core';
import { CardDetailService } from '../shared/card-detail.service';
import { CardDetail } from '../shared/card-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styles: ``
})
export class CardDetailsComponent implements OnInit {

  constructor(public service: CardDetailService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: CardDetail) {
    console.log("populate")
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?'))
      this.service.deleteCardDetail(id)
        .subscribe({
          next: res => {
            this.service.list = res as CardDetail[]
            this.toastr.error('Deleted successfully', 'Payment Detail Register')
          },
          error: err => { console.log(err) }
        })
  }
}
