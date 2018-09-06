import { Component, ViewChild } from "@angular/core";
import {
  NavController,
  NavParams,
  Slides,
  MenuController
} from "ionic-angular";

@Component({
  selector: "page-events-details",
  templateUrl: "events-details.html"
})
export class EventsDetailsPage {
  @ViewChild("slide")
  slides: Slides;

  details: Object = {};

  images: any;

  slideOptions = {
    pager: true,
    paginationClickable: true,
    paginationType: "bullets"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCTRL: MenuController) {
    let data = navParams.get("data");
    let loaded = navParams.get("loaded");
    for (const o in data) {
      this.details[o] = data[o];
    }
    this.images = this.details["slides"];
    loaded.dismiss();
    console.log(this.images);
  }
  ngOnInit() {
	this.menuCTRL.enable(false, 'menuMain')
    this.slides.loop = true;
    this.slides.effect = "fade";
    this.slides.autoplay = 3000;
  }
  private goEvents() {
    this.navCtrl.pop();
  }
}
