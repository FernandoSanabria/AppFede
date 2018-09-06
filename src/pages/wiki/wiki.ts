import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
/**
 * Generated class for the WikiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-wiki',
  templateUrl: 'wiki.html',
})
export class WikiPage {
  
  ngAfterViewInit() {
  }
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }
  private toggleMenu() :void
  {
    this.menuCtrl.toggle()
  }
}
