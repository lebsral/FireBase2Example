import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCOzx2ntuijEVWYFgC4b9u1gZApUwmXl9k",
  authDomain: "fbang-6ed8d.firebaseapp.com",
  databaseURL: "https://fbang-6ed8d.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "290526452461"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class MyAppModule {}
