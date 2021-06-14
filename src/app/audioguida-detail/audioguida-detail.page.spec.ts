import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudioguidaDetailPage } from './audioguida-detail.page';

describe('AudioguidaDetailPage', () => {
  let component: AudioguidaDetailPage;
  let fixture: ComponentFixture<AudioguidaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioguidaDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioguidaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
