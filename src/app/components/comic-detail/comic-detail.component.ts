import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from "../../service/home.service";

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {
  public data: any;
  public showmore: boolean = false;

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
          for (var prices of resp.data.results[0].prices) {
            if (prices.type === "printPrice") {
              this.data.price = prices.price;
            }
          }

          for (var date of resp.data.results[0].dates) {
            if (date.type === "focDate") {
              this.data.focDate = date.date;
            }
          }

          for (var creator of resp.data.results[0].creators.items) {
            if (creator.role === "colorist (cover)") {
              this.data.coverColorist = creator.name;
            } else if (creator.role === "inker (cover)") {
              this.data.coverInker = creator.name;
            } else if (creator.role === "penciler (cover)") {
              this.data.penciler = creator.name;
            } else if (creator.role === "writer") {
              this.data.writer = creator.name;
            } else if (creator.role === "colorist") {
              this.data.colorist = creator.name;
            } else if (creator.role === "editor") {
              this.data.editor = creator.name;
            } else if (creator.role === "inker") {
              this.data.inker = creator.name;
            } if (creator.role === "letterer") {
              this.data.letterer = creator.name;
            }
        }
          
        } else {
          console.log(JSON.stringify("no reso"));
        }
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      })
  }

  showMore(){
    this.showmore = true;
  }

}
