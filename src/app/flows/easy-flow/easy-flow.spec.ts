import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyFlow } from './easy-flow';

describe('EasyFlow', () => {
  let component: EasyFlow;
  let fixture: ComponentFixture<EasyFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasyFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
