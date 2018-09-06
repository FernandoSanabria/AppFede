import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, Component } from "@angular/core";
import {
  NavController,
  NavParams,
  MenuController,
  Loading,
  LoadingController,
  PopoverController,
  ViewController,
  AlertController,
} from "ionic-angular";
import { EventsPage } from "../events/events";
import { TouchID } from "@ionic-native/touch-id";
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  providers: [DatabaseProvider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  load: Loading;
  popOver: any = undefined;
  idea: any;
  titlesAnimated: Array<String> = ["Vive.", "Sueña.", "Crece.", "Evoluciona."];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public loader: LoadingController,
    private touchId: TouchID,
    private popover: PopoverController,
    private alertDialog: AlertController,
    private storage: DatabaseProvider
  ) {
    this.menu.swipeEnable(false);
  }
  ngOnInit() {
    this.menu.enable(true, "menuMain");
  }
  private openMenu() {
    this.menu.toggle();
  }
  private goToEvents() {
    this.navCtrl.push(EventsPage);
  }
  private addNewIdea() {
    if (!this.idea) {
      this.alertDialog.create({
        title: 'Ooops!',
        subTitle: 'Need an idea!',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel'
          }
        ]
      }).present();
    } else {
      this.storage.save(this.idea.toString(), {
        title: 'Lorem Ipsum',
        text: this.idea
      })
    }
  }
  private togglePopOver(ev) {
    if (!this.popOver) {
      this.popOver = this.popover.create(HomePagePopOver);
      this.popOver.present({
        ev: ev
      })
    } else {
      this.popOver.present({
        ev: ev
      })
    }
  }
}

@Component({
  templateUrl: "popOver.html",
  selector: 'popover-home'
})
export class HomePagePopOver {
  constructor(public view: ViewController) { }
}

@Component({
  selector: 'ideas-list',
  template: `
      <ion-slides>
      <ion-slide *ngFor="let card of cards">
        <ion-card>
          <ion-card-header>
              {{card.title}}
          </ion-card-header>
          <ion-card-content>
              {{card.text}}
          </ion-card-content>
        </ion-card>
      </ion-slide>
    </ion-slides>
  `
})

export class IdeasComponent {
  @Input() cards;
  @Output() onAddIdea: EventEmitter<any> = new EventEmitter();

  prepareUser(o: any) {
    this.onAddIdea.emit({
      title: o.title,
      text: o.text
    })
  }
}
