import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LagunaDetailPage } from './laguna-detail.page';

describe('LagunaDetailPage', () => {
  let component: LagunaDetailPage;
  let fixture: ComponentFixture<LagunaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LagunaDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LagunaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
