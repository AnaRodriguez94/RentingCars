import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateAreaPersonalInfoComponent } from './private-area-personal-info.component';

describe('PrivateAreaPersonalInfoComponent', () => {
  let component: PrivateAreaPersonalInfoComponent;
  let fixture: ComponentFixture<PrivateAreaPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateAreaPersonalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivateAreaPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
