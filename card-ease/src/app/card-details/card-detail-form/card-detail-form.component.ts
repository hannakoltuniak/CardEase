import { Component } from '@angular/core';
import { CardDetailService } from '../../shared/card-detail.service';
import { NgForm } from '@angular/forms';
import { CardDetail } from '../../shared/card-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-detail-form',
  templateUrl: './card-detail-form.component.html',
  styles: ``
})
export class CardDetailFormComponent {

  constructor (public service: CardDetailService, private toastr: ToastrService) {}

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true
    if (form.valid) {
      if (this.service.formData.paymentDetailId == 0)
        this.insertRecord(form)
      else
        this.updateRecord(form)
    }
  }

  insertRecord(form: NgForm) {
    this.service.assignRandomColor(this.service.formData)
    console.log(this.service.formData.color);
    
    this.service.postCardDetail()
      .subscribe({
        next: res => {
          this.service.list = res as CardDetail[]
          this.service.refreshList();
          this.service.resetForm(form)
          this.toastr.success('Inserted successfully', 'Card Detail Register')
        },
        error: err => { console.log(err) }
      })
  }
  updateRecord(form: NgForm) {
    this.service.putCardDetail()
      .subscribe({
        next: res => {
          this.service.list = res as CardDetail[]
          this.service.resetForm(form)
          this.toastr.info('Updated successfully', 'Card Detail Register')
        },
        error: err => { console.log(err) }
      })
   }
}
