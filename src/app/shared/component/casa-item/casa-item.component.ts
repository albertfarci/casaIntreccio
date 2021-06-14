import { Component, Input } from '@angular/core';
import { CASE_TYPE_ROUT } from '../../models/case-type.model';

@Component({
  selector: 'app-casa-item',
  templateUrl: './casa-item.component.html',
  styleUrls: ['./casa-item.component.scss'],
})
export class CasaItemComponent {

  @Input() casa
  @Input() configuration_tipo_casa;

  constructor() { }

  getRouterLink() {

    return CASE_TYPE_ROUT.get(this.configuration_tipo_casa)
  }

}
