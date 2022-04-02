import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';  
import { Iproduct } from './model/Iproduct';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {

//specify the data to be imported
@Input 
          () title: string =" ok";
          price: string= "4200";
          discountPrice: string ="2000";
           percentDiscount: string = "75%";
 //myName: string ="Ishola Abiola";

      

  



 /***
  *  products: ArrayM<Iproducts>;
  * 
  * 
  */

  constructor() { }

  ngOnInit(): void {
  }

}
