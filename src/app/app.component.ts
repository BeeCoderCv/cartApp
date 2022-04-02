import { Component } from '@angular/core';
import { Iproduct } from './my-card/model/Iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     products : Iproduct[] = [
     {
        title:"shoes",
        amount: 2500,
        percentage: 24500
     },
     {
      title:"clothes",
      amount: 3500,
      percentage: 22500
     },
     {
      title:"sandals",
      amount: 1500,
      percentage: 20500
     }

     ]
        

     
}
