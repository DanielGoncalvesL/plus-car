import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewExpenseVehiclePage } from './new-expense-vehicle.page';

describe('NewExpenseVehiclePage', () => {
  let component: NewExpenseVehiclePage;
  let fixture: ComponentFixture<NewExpenseVehiclePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExpenseVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewExpenseVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
