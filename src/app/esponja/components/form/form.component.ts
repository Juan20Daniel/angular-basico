import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'bobesponja-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public caracter: Character = {
    name: '',
    habilities:''
  }
  emitCaracter(): void {
    if(!this.caracter.name.length) return;
    this.onNewCharacter.emit(this.caracter);
    this.caracter = {
      name:'',
      habilities:''
    }
  }
}
