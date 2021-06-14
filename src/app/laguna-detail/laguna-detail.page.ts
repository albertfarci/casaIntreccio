import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { CaseService } from '../shared/services/case.service';

@Component({
  selector: 'app-laguna-detail',
  templateUrl: './laguna-detail.page.html',
  styleUrls: ['./laguna-detail.page.scss'],
})
export class LagunaDetailPage implements OnInit {


  casa
  showIframe: boolean = true;
  isPrefferedYet: boolean = false
  databaseObj: SQLiteObject;
  row_data: any = [];
  readonly database_name: string = "items.db";
  readonly table_name: string = "chiesa";

  constructor(
    private sqlite: SQLite,
    private activeRoute: ActivatedRoute,
    private caseService: CaseService
  ) { }

  ngOnInit() {
  }


  ionViewDidEnter() {
    this.showIframe = true

    const id = this.activeRoute.snapshot.paramMap.get('id');

    this.casa = this.caseService.getLagunaById(id)

    console.log(this.casa)

  }

  ionViewDidLeave() {
    this.showIframe = false
  }

}
