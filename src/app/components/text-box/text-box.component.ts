import { Component, Input } from '@angular/core';
import { Race } from 'src/app/models/race';
import { SummaryElement } from 'src/app/models/summary-element';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent {

    @Input()
    title?: string
    
    @Input()
    content?: string
}
