import {Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './ngbd-datepicker-popup.component.html'
})
export class NgbdDatepickerPopup {
  model: NgbDateStruct;
  @Input() parentForm: FormGroup;
  @Input() formControlName: string;
  @Input() formLabel: string; 
}