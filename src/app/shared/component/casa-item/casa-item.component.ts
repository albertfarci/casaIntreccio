import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-casa-item',
  templateUrl: './casa-item.component.html',
  styleUrls: ['./casa-item.component.scss'],
})
export class CasaItemComponent {

  @Input() casa

  constructor() { }

}
