import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResidentComponent } from './view-resident.component';

describe('ViewResidentComponent', () => {
  let component: ViewResidentComponent;
  let fixture: ComponentFixture<ViewResidentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewResidentComponent]
    });
    fixture = TestBed.createComponent(ViewResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
