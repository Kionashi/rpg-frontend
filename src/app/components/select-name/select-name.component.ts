import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-name',
  templateUrl: './select-name.component.html',
  styleUrls: ['./select-name.component.scss']
})
export class SelectNameComponent {
    public name: string = '';
    @Output()
    private nameChanged: EventEmitter<string>;
    constructor() {
        this.nameChanged = new EventEmitter<string>();
    }
    
    ngOnInit() {
    }

    nameChange(newValue: string) {
        console.log('Emitting');
        
        this.nameChanged.emit(newValue);
    }
    ngOnDestroy() {
    }
}
