import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable()
export class HomeService {
  apiKey: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiKey = environment.apiKey;
  }

  getComics(data) {
    data.characters = 1009268;
    data.orderBy = "-onsaleDate";
    return new Promise((resolve, reject) => {
      this.http.get(environment.baseUrl +  'comics?characters=' + data.characters + '&orderBy=' + data.orderBy + '&offset=' + data.offset + '&apikey=' + this.apiKey, { headers: { 'Content-Type': 'application/json' } }
      ).subscribe(
        data => { resolve(data); },
        error => { reject(error); }
        )
    });
  }

  getComicDetail(id) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.baseUrl + 'comics/' + id + '?apikey=' + this.apiKey, { headers: { 'Content-Type': 'application/json' } }
      ).subscribe(
        data => { resolve(data); },
        error => { reject(error) }
        )
    });
  }

}
