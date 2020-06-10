import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstTimePage } from './first-time.page';

describe('FirstTimePage', () => {
  let component: FirstTimePage;
  let fixture: ComponentFixture<FirstTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
