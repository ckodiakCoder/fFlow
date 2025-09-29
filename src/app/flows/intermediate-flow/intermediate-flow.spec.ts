import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateFlow } from './intermediate-flow';

describe('IntermediateFlow', () => {
  let component: IntermediateFlow;
  let fixture: ComponentFixture<IntermediateFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediateFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntermediateFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
