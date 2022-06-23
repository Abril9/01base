import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  title: string  = 'Sumador';
  base: number = 2;
  numero : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
