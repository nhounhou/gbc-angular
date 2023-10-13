import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuttlenewComponent } from './shuttlenew.component';

describe('ShuttlenewComponent', () => {
  let component: ShuttlenewComponent;
  let fixture: ComponentFixture<ShuttlenewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShuttlenewComponent]
    });
    fixture = TestBed.createComponent(ShuttlenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
