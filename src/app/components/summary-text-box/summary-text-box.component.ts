import { Component, Input } from '@angular/core';
import { Race } from 'src/app/models/race';
import { SummaryElement } from 'src/app/models/summary-element';

@Component({
  selector: 'app-summary-text-box',
  templateUrl: './summary-text-box.component.html',
  styleUrls: ['./summary-text-box.component.scss']
})
export class SummaryTextBoxComponent {
    @Input()
    selectedElement: Partial<SummaryElement> = {};
}
