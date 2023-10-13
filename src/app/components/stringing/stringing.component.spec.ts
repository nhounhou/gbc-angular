import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringingComponent } from './stringing.component';

describe('StringingComponent', () => {
  let component: StringingComponent;
  let fixture: ComponentFixture<StringingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringingComponent]
    });
    fixture = TestBed.createComponent(StringingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
