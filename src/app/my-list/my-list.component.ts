import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
   names: string[] = ["felix", "biodun","biola",];
  constructor() { 
  }

  ngOnInit(): void {
  }

}
