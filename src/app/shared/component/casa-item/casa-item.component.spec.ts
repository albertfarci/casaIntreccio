import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasaItemComponent } from './casa-item.component';

describe('ChiesaItemComponent', () => {
  let component: CasaItemComponent;
  let fixture: ComponentFixture<CasaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
