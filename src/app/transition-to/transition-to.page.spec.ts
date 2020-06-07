import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransitionToPage } from './transition-to.page';

describe('TransitionToPage', () => {
  let component: TransitionToPage;
  let fixture: ComponentFixture<TransitionToPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionToPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransitionToPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
