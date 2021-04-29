import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '../shared/services/case.service';

@Component({
  selector: 'app-itinerario-item-detail',
  templateUrl: './itinerario-item-detail.page.html',
  styleUrls: ['./itinerario-item-detail.page.scss'],
})
export class ItinerarioItemDetailPage {

  casa
  showIframe: boolean = true;

  constructor(
    private activeRoute: ActivatedRoute,
    private caseService: CaseService
  ) { }

  ionViewWillEnter() {

    const id = this.activeRoute.snapshot.paramMap.get('id');

    console.log(id)
    this.casa = this.caseService.geItinerarioById(id)
    this.showIframe = true
  }

  ionViewDidLeave() {
    this.showIframe = false
  }
}
