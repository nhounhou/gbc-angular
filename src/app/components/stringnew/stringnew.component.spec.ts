import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringnewComponent } from './stringnew.component';

describe('StringnewComponent', () => {
  let component: StringnewComponent;
  let fixture: ComponentFixture<StringnewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringnewComponent]
    });
    fixture = TestBed.createComponent(StringnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
