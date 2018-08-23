import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPieChartComponent } from './demo-pie-chart.component';

describe('DemoPieChartComponent', () => {
  let component: DemoPieChartComponent;
  let fixture: ComponentFixture<DemoPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
