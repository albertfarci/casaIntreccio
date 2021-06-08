import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({ name: 'translatePipe' })
export class TranslatePipe implements PipeTransform {
   
    constructor(
        private translateService: TranslateService) {
    }

    transform(value: string): string {
        console.log(sessionStorage.getItem('lang'))
        this.translateService.use(sessionStorage.getItem('lang'));
        return this.translateService.instant(value);
    }
}