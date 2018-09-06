import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController, Slides } from "ionic-angular";
import { WikiPage } from "../wiki/wiki";
import { EventsPage } from "../events/events";

@Component({
  selector: "page-intro",
  templateUrl: "intro.html"
})
export class IntroPage {
  @ViewChild(Slides)
  slides: Slides;

  private nav: NavController;

  buttonShowState: boolean = false;
  buttonHideState: boolean = true;
  prevSlideIndex: boolean = false;

  ngAfterViewInit() {}

  constructor(navCtrl: NavController) {
    this.nav = navCtrl;
  }
  public nextSlide(): void {
    if (this.slides.isEnd()) {
      this.nav.push(EventsPage);
    } else {
      this.slides.slideNext();
      this.buttonShowState = true;
      this.buttonHideState = false;
    }
  }
  public prevSlide(): void {
    switch (this.slides.getActiveIndex()) {
      case 1:
        this.buttonShowState = false;
        this.buttonHideState = true;
        this.slides.slidePrev();
        break;
      default:
        this.slides.slidePrev();
        break;
    }
  }
}
