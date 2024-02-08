import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [{ //arreglo de tipo interface Character
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character): void {
    //utilizando el operador express del character y con esto le decimos que
    //tome el resto de las propiedades y exparselas en el nuevo objeto newCharacter
    const newCharacter: Character = {id: uuid(), ...character};

    //Agregar al final del arreglo Character los valores de character con el metodo push
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number) {
    //console.log(index);
    // this.characters.splice(index, 1); //Borra solo un elemento que indica el index
  deleteCharacterById(id:string){
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
