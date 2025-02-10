import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = ['Mecoman','Cacasman','Vergaman']
  public heroDeleted?:string;
  remove():void {
    this.heroDeleted = this.heroNames.pop();
  }
}
