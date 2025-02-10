import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
console.log(uuid());
@Injectable({
  providedIn: 'root'
})
export class BbeService {
  public caracters: Character[] = []
  onNewCaracter(character:Character):void {
    this.caracters.push({...character, id:uuid()});
  }
  onDeleteCharacter(id:string): void {
    this.caracters = this.caracters.filter(caracter => caracter.id !== id);
  }
}
