import { Component } from '@angular/core';
import { CaseService } from '../shared/services/case.service';
import { Observable, Subject } from 'rxjs';
import { LisMapModel, LIST_MAP_CONFIGURATION, ListMapTypes } from '../home/models/list-map-settings.model';
import { HomeTemplateSettingsService } from '../home/services/home-template-settings.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-laguna',
  templateUrl: './laguna.page.html',
  styleUrls: ['./laguna.page.scss'],
})
export class LagunaPage {

  listMapSettingsConfiguration: LisMapModel = LIST_MAP_CONFIGURATION.get(ListMapTypes.listVisualization);

  laguna;

  destroy$: Subject<boolean>;

  constructor(
    private caseService: CaseService,
    private homeTemplateSettingsService: HomeTemplateSettingsService, ) { }

  ionViewDidEnter() {

    this.destroy$ = new Subject<boolean>();

    this.caseService.getAllLagune()
    .pipe(takeUntil(this.destroy$))
      .subscribe(
        data => {
          console.log(data)
          this.laguna = data
        }
      )

  }

  getListMapSettings(listMapTypes) {
    this.listMapSettingsConfiguration = this.homeTemplateSettingsService.getListMapSettings(listMapTypes);
  }

  ionViewDidLeave(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
