import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Directive, ElementRef } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { IntroPage } from '../pages/intro/intro';
import { WikiPage } from '../pages/wiki/wiki';
import { EventsPage } from '../pages/events/events';
import { EventsDetailsPage } from '../pages/events-details/events-details';
import { HomePage, HomePagePopOver, IdeasComponent } from '../pages/home/home';
import { MonitorDirective } from '../directives/monitor/monitor'
import { UndernodeServiceProvider } from '../providers/undernode-service/undernode-service';
import { TypeButtonDirective } from '../directives/type-button/type-button';
import { TouchID } from '@ionic-native/touch-id';
import { DatabaseProvider } from '../providers/database/database';
import { AnimateTextDirective } from '../directives/animate-text/animate-text';

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    WikiPage,
    EventsPage,
    EventsDetailsPage,
    MonitorDirective,
    TypeButtonDirective,
    AnimateTextDirective,
    HomePage,
    HomePagePopOver,
    IdeasComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    WikiPage,
    EventsPage,
    EventsDetailsPage,
    HomePage,
    HomePagePopOver,
    IdeasComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UndernodeServiceProvider,
    TouchID,
    DatabaseProvider
  ]
})
export class AppModule {}
