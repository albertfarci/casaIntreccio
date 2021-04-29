import { Component, OnInit, NgZone } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.page.html',
  styleUrls: ['./preferiti.page.scss'],
})
export class PreferitiPage {

  caseFiltered = []

  constructor(
    private toast: Toast,
    private ngZone: NgZone,
    private nativeStorage: NativeStorage) { }

  ionViewDidEnter() {

    this.caseFiltered = []
    this.ngZone.run(() => {

      this.nativeStorage.keys()
        .then(
          data => this.dataRetrived(data),
          error => console.error(error)
        );
    });
  }

  dataRetrived = (data) => {

    data.map(
      casaId => {
        this.nativeStorage.getItem(casaId)
          .then(
            data => {
              this.caseFiltered.push(data)
            },
            error => console.error(error)
          );
      }
    )
  };

  /* toast message */
  alert(msg) {
    this.toast.show(msg, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }

}
