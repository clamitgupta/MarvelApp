import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from "../../service/home.service";

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {
  public data: any = "loading........";

  constructor(
    private activatedRoute: ActivatedRoute,
    public homeService: HomeService
  ) {
     this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.getComicDetail(id);
    });
   }

  ngOnInit() {
  }

  getComicDetail(id) {
    this.homeService.getComicDetail(id)
      .then((resp: any) => {
        if (resp && resp.data && resp.data.results.length) {
          this.data = resp.data.results[0];
        } else {
          console.log(JSON.stringify("no reso"));
        }
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      })
  }

}
