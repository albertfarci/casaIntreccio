import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasaDetailPage } from './casa-detail.page';

describe('ChiesaDetailPage', () => {
  let component: CasaDetailPage;
  let fixture: ComponentFixture<CasaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
