import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '../shared/services/case.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chiesa-detail',
  templateUrl: './casa-detail.page.html',
  styleUrls: ['./casa-detail.page.scss'],
})
export class CasaDetailPage implements OnInit {

  casa
  showIframe: boolean = true;

  constructor(
    private activeRoute: ActivatedRoute,
    private caseService: CaseService
  ) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');

    this.casa = this.caseService.getCasaById(id)
  }

  ionViewWillEnter() {
    this.showIframe = true
  }

  ionViewDidLeave() {
    this.showIframe = false
  }
}
