import { Component, OnInit } from '@angular/core';
import { HomeService } from "../../service/home.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public offset: number;
  public data: any[];
  public allowScroll = false;

  constructor(
    public homeService: HomeService,
    public router: Router
  ) {
    this.offset = 0;
    this.getComics();
  }

  ngOnInit() {
  }

  getComics() {
    var data = {
      offset: this.offset
    }
    this.homeService.getComics(data)
      .then((resp: any) => {
        if (resp && resp.data && resp.data.results.length) {
          if (this.offset == 0) {
            this.data = resp.data.results;
          } else {
            this.data = this.data.concat(resp.data.results);
          }
          this.offset = this.offset + resp.data.results.length;
          this.allowScroll = this.offset === resp.data.total ? true : false;
        } else {
          console.log(JSON.stringify("no reso"));
        }
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      })
  }

  goToDetail(id) {
    this.router.navigate(['/comic-detail', id]);
  }

  onScroll() {
    this.allowScroll = this.offset === 0 ? false : true;
    this.getComics();
  }
}
