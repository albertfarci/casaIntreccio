import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaseResultNumberComponent } from './case-result-number.component';

describe('ChieseResultNumberComponent', () => {
  let component: CaseResultNumberComponent;
  let fixture: ComponentFixture<CaseResultNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseResultNumberComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaseResultNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
