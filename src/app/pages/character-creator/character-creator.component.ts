import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Character } from 'src/app/models/character';
import { Job } from 'src/app/models/job';
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
                const race: Race = trait.value
                this.image = race.image? race.image: '';
                this.textBoxTitle = this.currentCharacter.name + ' the ' + race.name;
                this.textBoxContent = race.description;
                this.currentCharacter.race_id = race.id;
                break;
            case 'job':
                    const job: Job = trait.value
                    this.image = job.image? job.image: '';
                    this.textBoxTitle = this.currentCharacter.name + ' the ' + job.name;
                    this.textBoxContent = job.description;
                    this.currentCharacter.job_id = job.id;
                    break;
            
            default:
                break;
        }
       
    }
}
