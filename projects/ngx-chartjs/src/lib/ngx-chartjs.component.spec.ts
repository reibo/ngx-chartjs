import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartjsComponent } from './ngx-chartjs.component';

describe('NgxChartjsComponent', () => {
  let component: NgxChartjsComponent;
  let fixture: ComponentFixture<NgxChartjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxChartjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
