import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloraFaunaDetailPage } from './flora-fauna-detail.page';

describe('FloraFaunaDetailPage', () => {
  let component: FloraFaunaDetailPage;
  let fixture: ComponentFixture<FloraFaunaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloraFaunaDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloraFaunaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
