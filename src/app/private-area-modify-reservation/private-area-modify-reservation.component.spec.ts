import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateAreaModifyReservationComponent } from './private-area-modify-reservation.component';

describe('PrivateAreaModifyReservationComponent', () => {
  let component: PrivateAreaModifyReservationComponent;
  let fixture: ComponentFixture<PrivateAreaModifyReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateAreaModifyReservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivateAreaModifyReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
