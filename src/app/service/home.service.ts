import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HomeService {
  apiKey: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiKey = "baaffcab25d18e5c04d37a4a35a839fa";
  }

  getComics(data) {
    data.characters = 1009268;
    data.orderBy = "-onsaleDate";

    return new Promise((resolve, reject) => {
      this.http.get('https://gateway.marvel.com:443/v1/public/comics?characters=' + data.characters + '&orderBy=' + data.orderBy + '&offset=' + data.offset + '&apikey=' + this.apiKey, { headers: { 'Content-Type': 'application/json' } }
      ).subscribe(
        data => { resolve(data); },
        error => { reject(error); }
        )
    });
  }

  getComicDetail(id) {
    return new Promise((resolve, reject) => {
      this.http.get('https://gateway.marvel.com:443/v1/public/comics/' + id + '?apikey=' + this.apiKey, { headers: { 'Content-Type': 'application/json' } }
      ).subscribe(
        data => { resolve(data); },
        error => { reject(error) }
        )
    });
  }

}
