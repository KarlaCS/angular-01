import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //Lo que contiene el módulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //Lo que quiero hacer visible fuera de este módulo
    exports: [
        ListadoComponent
    ],
    //Módulos que quiero que sean visibles
    imports: [
        CommonModule //Contiene directivas como *ngFor, *ngIf
    ]
})
export class HeroesModule{

}