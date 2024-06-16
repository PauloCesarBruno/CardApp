import { Injectable } from '@angular/core';
import { CardDetalhe } from './card-detalhe.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CardDetalheService {

  constructor(private http: HttpClient) { }
  // localhost Publicado no meu IIS
  // readonly baseURL = 'http://192.168.0.10:5100/api/CardDetail';

  // localhost do Back-End no Visual Studio 2022
   readonly baseURL = 'http://localhost:5000/api/CardDetail';
  formData: CardDetalhe = new CardDetalhe();
  list: CardDetalhe[];

  // tslint:disable-next-line: typedef
  postCardDetalhe() {
    return this.http.post(this.baseURL, this.formData);
  }
   // tslint:disable-next-line: typedef
   putCardDetalhe() {
    return this.http.put(`${this.baseURL}/${this.formData.cataoDetalheId}`, this.formData);
  }

  // tslint:disable-next-line: typedef
  deleteCardDetalhe(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  // tslint:disable-next-line: typedef
  refreshList() {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as CardDetalhe[]);
  }
}
