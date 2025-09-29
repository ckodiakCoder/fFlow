import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateFlow } from './ultimate-flow';

describe('UltimateFlow', () => {
  let component: UltimateFlow;
  let fixture: ComponentFixture<UltimateFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltimateFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimateFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
