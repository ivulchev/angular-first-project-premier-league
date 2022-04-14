import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: any | undefined;
  constructor(public fbAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  greeting(email: any){
    let array = email.split("@")
    return array[0]
  }
}
