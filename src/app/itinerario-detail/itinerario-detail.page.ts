import { Component } from '@angular/core';
import { CaseService } from '../shared/services/case.service';
import { Observable, Subject } from 'rxjs';
import { LisMapModel, LIST_MAP_CONFIGURATION, ListMapTypes } from '../home/models/list-map-settings.model';
import { HomeTemplateSettingsService } from '../home/services/home-template-settings.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-itinerario-detail',
  templateUrl: './itinerario-detail.page.html',
  styleUrls: ['./itinerario-detail.page.scss'],
})
export class ItinerarioDetailPage {


  listMapSettingsConfiguration: LisMapModel = LIST_MAP_CONFIGURATION.get(ListMapTypes.listVisualization);

  case;

  destroy$: Subject<boolean>;

  constructor(
    private caseService: CaseService,
    private homeTemplateSettingsService: HomeTemplateSettingsService, ) { }

  ionViewDidEnter() {

    this.destroy$ = new Subject<boolean>();

    this.caseService.getAllItinerari()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        data => {
          this.case = data
        }
      )

  }

  getListMapSettings(listMapTypes) {
    this.listMapSettingsConfiguration = this.homeTemplateSettingsService.getListMapSettings(listMapTypes);
  }

  ionViewDidLeave(): void {
    console.log("ionViewDidLeave")
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
