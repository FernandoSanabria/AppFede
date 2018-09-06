import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import {HomePage} from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
  rootPage:any = undefined;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    database: Storage
  ) {

    this.rootPage = HomePage;
    //splashScreen.show()
    /*database.get('now').then((value) => {
         if (!value)
         {
           console.log('not found `now` metadata.')
           database.set('now', new Date())
           this.rootPage = IntroPage
         } else {
            console.log('now is '+ value)
            this.rootPage = WikiPage
         }
    });*/

    platform.ready().then(() => { 
      statusBar.styleDefault();
      //splashScreen.hide();
    });
  }

}

