import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStackedChartComponent } from './demo-stacked-chart.component';

describe('DemoStackedChartComponent', () => {
  let component: DemoStackedChartComponent;
  let fixture: ComponentFixture<DemoStackedChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoStackedChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoStackedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
