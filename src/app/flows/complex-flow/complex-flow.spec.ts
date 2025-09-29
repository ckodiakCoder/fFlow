import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFlow } from './complex-flow';

describe('ComplexFlow', () => {
  let component: ComplexFlow;
  let fixture: ComponentFixture<ComplexFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
