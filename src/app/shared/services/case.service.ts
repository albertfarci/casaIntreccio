import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { TranslationModels } from '../models/translation-model';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(
    private httpClient: HttpClient,
    private translateService: TranslateService
  ) { }

  getAllCaseAndIntineraries(): Observable<any> {
    console.log(TranslationModels[this.translateService.currentLang])

    return this.httpClient.get(`../../../assets/chieseRomane-${this.translateService.currentLang}.json`);
  }

  getAllCase(): Observable<any> {

    console.log(TranslationModels[this.translateService.currentLang])

    return this.getAllCaseAndIntineraries()
      .pipe(
        map(result =>
          result.filter(one => one.pmdb_categorie[0] != 'itinerari')
        )
      )
  }

  getAllLagune(): Observable<any> {

    console.log(TranslationModels[this.translateService.currentLang])

    return this.getAllCaseAndIntineraries()
      .pipe(
        map(result =>
          result.filter(one => one.categories.includes(35) || 
            one.categories.includes(34) || 
            one.categories.includes(42) || 
            one.categories.includes(36) || 
            one.categories.includes(37))
        )
      )
  }

  getAllFloraFauna(): Observable<any> {

    console.log(TranslationModels[this.translateService.currentLang])

    return this.getAllCaseAndIntineraries()
      .pipe(
        map(result =>
          result.filter(one => one.categories.includes(32) ||
          one.categories.includes(33) ||
          one.categories.includes(13))
        )
      )
  }

  getAllAudioGuida(): Observable<any> {

    console.log(TranslationModels[this.translateService.currentLang])

    return this.getAllCaseAndIntineraries()
      .pipe(
        map(result =>
          result.filter(one => one.categories.includes(43))
        )
      )
  }

  getAllItinerari(): Observable<any> {
    console.log(TranslationModels[this.translateService.currentLang])

    return this.httpClient.get(`../../../assets/itinerari-${this.translateService.currentLang}.json`);
  };

  geItinerarioById(id): Observable<any> {
    return this.getAllItinerari()
      .pipe(
        map(result =>
          result.filter(one => one.id == id)
        )
      )
  }

  getCasaById(id): Observable<any> {
    return this.getAllCase()
      .pipe(
        map(result =>
          result.filter(one => one.id == id)
        )
      )
  }

}
