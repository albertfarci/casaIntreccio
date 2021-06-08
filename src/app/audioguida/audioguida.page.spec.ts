import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudioguidaPage } from './audioguida.page';

describe('AudioguidaPage', () => {
  let component: AudioguidaPage;
  let fixture: ComponentFixture<AudioguidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioguidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioguidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
