import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CardDetail } from './card-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CardDetailService {

  url: string = environment.apiBaseUrl + "api/CardDetail";
  list: CardDetail[] = [];
  formData: CardDetail = new CardDetail();
  formSubmitted: boolean = false;

  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url).subscribe( {
      next: res => {
        this.list = res as CardDetail[]
      },
      error: error => {
        console.log(error);
      }
    })
  }

  postCardDetail() {
    return this.http.post(this.url, this.formData)
  }

  putCardDetail() {
    return this.http.put(this.url + '/' + this.formData.paymentDetailId, this.formData)
  }


  deleteCardDetail(id: number) {
    return this.http.delete(this.url + '/' + id)
  }


  resetForm(form: NgForm) {
    form.form.reset()
    this.formData = new CardDetail()
    this.formSubmitted = false
  }
}
