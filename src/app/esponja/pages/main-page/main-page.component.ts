import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { BbeService } from '../../services/bbe.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private bbeService:BbeService) {}
  get characters():Character[] {
    return [...this.bbeService.caracters];
  }
  onDeleteCharacter(id: string):void {
    this.bbeService.onDeleteCharacter(id);
  }
  onNewCharacter(character:Character):void {
    this.bbeService.onNewCaracter(character);
  }
}
