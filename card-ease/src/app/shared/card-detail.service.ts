import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CardDetail } from './card-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CardDetailService {

  url: string = environment.apiBaseUrl + "api/CardDetail";
  list: CardDetail[] = [];

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
}
