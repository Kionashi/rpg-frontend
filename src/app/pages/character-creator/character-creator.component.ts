import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Character } from 'src/app/models/character';
import { Race } from 'src/app/models/race';
import { Trait } from 'src/app/models/trait';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.scss'],
})
export class CharacterCreatorComponent {

    image: string = '';
    currentCharacter: Partial<Character> = {};
    textBoxContent?: string
    textBoxTitle?: string
    characterCreatorForm = new FormGroup({
        name : new FormControl('',Validators.required)
    });

    createCharacter(){

    }

    traitAdded(trait: Trait) {
        console.log('trait added');
        
        switch (trait.name) {
            case 'name':
                console.log('name added');
                
                this.currentCharacter.name = trait.value;
                break;
            case 'race':
                const raceValue: Race = trait.value
                this.image = raceValue.image? raceValue.image: '';
                this.textBoxTitle = this.currentCharacter.name + ' the ' + raceValue.name;
                this.textBoxContent = raceValue.description;
                this.currentCharacter.race_id = raceValue.id;
                break;
            
            default:
                break;
        }
       
    }
}
