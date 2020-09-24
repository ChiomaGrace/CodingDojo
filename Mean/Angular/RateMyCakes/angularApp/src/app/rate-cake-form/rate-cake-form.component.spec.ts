import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCakeFormComponent } from './rate-cake-form.component';

describe('RateCakeFormComponent', () => {
  let component: RateCakeFormComponent;
  let fixture: ComponentFixture<RateCakeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateCakeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateCakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
