import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFlow } from './basic-flow';

describe('BasicFlow', () => {
  let component: BasicFlow;
  let fixture: ComponentFixture<BasicFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
