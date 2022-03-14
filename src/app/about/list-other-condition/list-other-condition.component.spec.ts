import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOtherConditionComponent } from './list-other-condition.component';

describe('ListOtherConditionComponent', () => {
  let component: ListOtherConditionComponent;
  let fixture: ComponentFixture<ListOtherConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOtherConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOtherConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
