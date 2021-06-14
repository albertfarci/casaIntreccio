import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss'],
})
export class CaseListComponent {

  @Input() case;
  @Input() configuration_tipo_casa;


  constructor() { }

}
