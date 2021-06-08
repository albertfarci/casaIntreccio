import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LagunaPage } from './laguna.page';

describe('LagunaPage', () => {
  let component: LagunaPage;
  let fixture: ComponentFixture<LagunaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LagunaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LagunaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
