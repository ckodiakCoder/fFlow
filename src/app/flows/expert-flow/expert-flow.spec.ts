import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertFlow } from './expert-flow';

describe('ExpertFlow', () => {
  let component: ExpertFlow;
  let fixture: ComponentFixture<ExpertFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
