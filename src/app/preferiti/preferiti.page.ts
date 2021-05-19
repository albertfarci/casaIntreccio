import { Component, OnInit, NgZone } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { CaseService } from '../shared/services/case.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.page.html',
  styleUrls: ['./preferiti.page.scss'],
})
export class PreferitiPage {

  caseFiltered = []
  databaseObj: SQLiteObject;
  row_data: any = [];
  readonly database_name: string = "items.db";
  readonly table_name: string = "chiesa";

  constructor(
    private toast: Toast,
    private caseService: CaseService,
    private sqlite: SQLite) { }

  ionViewDidEnter() {

    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.databaseObj = db;
        this.databaseObj.executeSql(`
      CREATE TABLE IF NOT EXISTS ${this.table_name}  (pid INTEGER PRIMARY KEY, chiesa INTEGER)
      `, [])
        .then(() => {
          this.databaseObj.executeSql(`
    SELECT * FROM ${this.table_name}
    `
      , [])
      .then((res) => {

        this.row_data = [];
        if (res.rows.length > 0) {

          this.dataRetrived(res.rows);
          
        }
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
  }

  dataRetrived = (data) => {
    this.caseFiltered=[]

    for (var i = 0; i < data.length; i++) {

      this.caseService.getCasaById(data.item(i).chiesa).subscribe(
        data => {
          this.caseFiltered.push(data[0])
        }
      )
    }
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
