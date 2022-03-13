import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  constructor(public fbAuth: AngularFireAuth){
  }
  title = 'Premier League';
}
