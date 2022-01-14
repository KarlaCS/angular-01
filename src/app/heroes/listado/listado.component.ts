import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Hulk','Ironman','Spiderman'];
  heroeEliminado: string = '';

  borrarHeroe():void{
    this.heroeEliminado = this.heroes.shift() || '';
  }
}
