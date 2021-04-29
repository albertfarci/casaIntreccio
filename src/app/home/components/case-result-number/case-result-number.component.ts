import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chiese-result-number',
  templateUrl: './case-result-number.component.html',
  styleUrls: ['./case-result-number.component.scss'],
})
export class CaseResultNumberComponent implements OnInit {

  @Input() chieseList
  constructor() { }

  ngOnInit() { }

}
