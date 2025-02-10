import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eee-casa-putas',
  template: `<div>
    <h3>Counter: {{counter}}</h3>
    <button (click)="incrementBy(1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="incrementBy(-1)">-1</button>
  </div>`
})

export class CounterComponent implements OnInit {
  public title:string = 'Casa putas';
  public counter:number = 0;
  ngOnInit(): void {

  }
  incrementBy(num:number):void {
    this.counter +=num;
  }
  resetCounter():void {
    this.counter = 0;
  }
}
