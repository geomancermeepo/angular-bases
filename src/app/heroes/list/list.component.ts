import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public deletedHero?: string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop(); //Elimina el ultimo heroe de la lista o arreglo y los regresa


    // this.heroNames.shift(); //Elimina el primer heroe de la lista o arreglo y lo regresa

  }
}
