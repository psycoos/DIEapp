import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutroPage } from './outro.page';

describe('OutroPage', () => {
  let component: OutroPage;
  let fixture: ComponentFixture<OutroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
