import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFlow } from './advanced-flow';

describe('AdvancedFlow', () => {
  let component: AdvancedFlow;
  let fixture: ComponentFixture<AdvancedFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
