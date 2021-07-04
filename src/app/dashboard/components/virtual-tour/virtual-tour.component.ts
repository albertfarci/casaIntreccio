import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx';
@Component({
  selector: 'app-virtual-tour',
  templateUrl: './virtual-tour.component.html',
  styleUrls: ['./virtual-tour.component.scss'],
})
export class VirtualTourComponent implements OnChanges {

  @Input() case;
  @Input() beaconInterno;
  @Input() beaconEsterno;
  @Input() virtualTour: boolean = true;
  @Output() stopRangingBeaconsInRegion = new EventEmitter<string>();

  casaScanned = []
  constructor(
    private toast: Toast) { }

  ngOnChanges() {

    if (this.case) {

      if (this.beaconEsterno) {
        this.stopRangingBeaconsInRegion.emit()
      }
      
      this.casaScanned = this.case
        .map(
          casa => {
            return {
              id: casa.id,
              narrazione: casa.narrazione,
              virtual_tour: casa.virtual_tour,
              audio: casa.audio,
              pmdb_galleria_foto: casa.pmdb_galleria_foto,
              pmdb_location_address: casa.pmdb_location_address,
              pmdb_location_city: casa.pmdb_location_city,
              title: {
                rendered: casa.title.rendered
              },
              beacons: [
                {
                  uuid: casa.uuid,
                  major: casa.major,
                  minor: casa.minor
                }
              ]
            }
          }
        ).filter(
          casa =>
            (casa.beacons[0].uuid == this.beaconEsterno?.uuid &&
              casa.beacons[0].major == this.beaconEsterno?.major.toString() &&
              casa.beacons[0].minor == this.beaconEsterno?.minor.toString())
        )
    }
  }

  /* toast message */
  alert(msg: string) {
    this.toast.show(msg, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }
}
