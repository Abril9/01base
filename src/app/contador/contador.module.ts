import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations:[
        //que cosas contine este componente
        ContadorComponent
        ],
    exports:[
        //cosas que quiero que sean visibles afuera de este modulo
        ContadorComponent
    ],
    imports:[
        //Usualmente modulos que necesito
        CommonModule
    ]
})
export class ContadorModule{

}