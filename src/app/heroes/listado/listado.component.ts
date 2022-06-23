import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes : string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  constructor() { }

  public borrar(index:number):void{
    var heroes2 = []; 
    for(var i=0;i<this.heroes.length; i++){
      if(i != index) heroes2.push(this.heroes[i])
    }
    this.heroes = heroes2;
  }

}
