import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloraFaunaPage } from './flora-fauna.page';

describe('FloraFaunaPage', () => {
  let component: FloraFaunaPage;
  let fixture: ComponentFixture<FloraFaunaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloraFaunaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloraFaunaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
