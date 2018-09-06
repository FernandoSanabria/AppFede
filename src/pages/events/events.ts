import {
  Component,
  ViewChild,
} from "@angular/core";
import {
  NavController,
  NavParams,
  LoadingController,
  Loading,
  Content,
  MenuController,
} from "ionic-angular";
import { sprintf } from "sprintf-js";
import { EventsDetailsPage } from "../events-details/events-details";
import { UndernodeServiceProvider } from "../../providers/undernode-service/undernode-service";
import { Observable } from "rxjs";

@Component({
  selector: "page-events",
  templateUrl: "events.html",
  providers: [UndernodeServiceProvider],
})
export class EventsPage {

  events: Array<Object> = [];

  serviceNotAvailable: boolean = false;

  io: any;

  loadEvent: Loading;

  loadFromHome: Loading;

  @ViewChild(Content) content: Content;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loader: LoadingController,
    public provider: UndernodeServiceProvider,
    public menuCTRL: MenuController
  ) {
  }

  ngOnInit() {

    this.menuCTRL.enable(false, 'menuMain');

    this.loadFromHome = this.loader.create({
      content: "Please wait...",
      spinner: "crescent"
    });

    this.loadFromHome.present();

   this.provider.getEvents().then(e => {
     let result = e[0][0];
     if (!result.error)
     {
       this.events = e[0];
       this.loadFromHome.dismiss()

     } else {
       this.serviceNotAvailable = true;
     }
     console.log(e[0])
   });
  }
  private expandEvent(e) {
    this.loadEvent = this.loader.create({
      content: "Please wait...",
      spinner: "crescent",
    });
    this.loadEvent.present();
    setTimeout(() => {
      this.navCtrl.push(EventsDetailsPage, {
        data: e,
        loaded: this.loadEvent
      });
    }, 150);
  }
  private goHome() {
    this.menuCTRL.enable(true, 'menuMain')
    this.navCtrl.pop();
  }
  private scrollTop() {
    this.content.scrollToTop();
  }
}
