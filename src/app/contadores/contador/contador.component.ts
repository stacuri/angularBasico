import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`
    <h1>{{titulo}}</h1>

    <span> La base es {{base}} </span>

    <button (click)="controlar(base)">+5</button>
    <span> {{numero}} </span>
    <button (click)="controlar(-    base)">-5</button>
    `
})

export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
  
    sumar(){
      this.numero ++;      
    }
  
    restar(){
      this.numero --;
    }
  
    controlar(valor: number){
        this.numero += valor;
    }
}