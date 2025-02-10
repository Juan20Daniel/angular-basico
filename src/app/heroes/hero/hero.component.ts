import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Mecoman';
  private age: number = 340;

  get capitalizeName():string {
    return this.name.toLocaleUpperCase();
  }
  heroDescription():string {
    return `${this.name} - ${this.age}`;
  }
  changeHero():void {
    this.name = 'EE casa putas';
  }
  get showAge():number {
    return this.age;
  }
  changeAge():void {
    this.age = 3333333333
  }
}
