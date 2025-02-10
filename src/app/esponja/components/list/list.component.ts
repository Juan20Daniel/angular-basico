import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'bobesponja-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() public caracters: Character[] = []
  @Output() onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id?:string): void {
    this.onDeleteCharacter.emit(id);
  }
}
