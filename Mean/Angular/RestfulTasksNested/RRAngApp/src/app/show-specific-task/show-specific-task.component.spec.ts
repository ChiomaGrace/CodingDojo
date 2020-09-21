import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpecificTaskComponent } from './show-specific-task.component';

describe('ShowSpecificTaskComponent', () => {
  let component: ShowSpecificTaskComponent;
  let fixture: ComponentFixture<ShowSpecificTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSpecificTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSpecificTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
