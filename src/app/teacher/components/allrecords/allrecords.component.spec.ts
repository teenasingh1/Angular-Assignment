import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrecordsComponent } from './allrecords.component';

describe('AllrecordsComponent', () => {
  let component: AllrecordsComponent;
  let fixture: ComponentFixture<AllrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllrecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
