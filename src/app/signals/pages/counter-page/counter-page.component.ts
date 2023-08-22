import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  public counter = signal(10)
  /* Esto es una señal computada y la ventaja que tiene es que puede leer otras señales, esta se esta haciendo 
  para hacer el counter al cuadrado y establecer el valor en el squareCounter */
  public squareCounter = computed( ()=> this.counter() * this.counter()  )

  increaseBy(value: number){

    this.counter.update( current => current + value )
  }

}
