import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBarChartComponent } from './demo-bar-chart.component';

describe('DemoBarChartComponent', () => {
  let component: DemoBarChartComponent;
  let fixture: ComponentFixture<DemoBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
