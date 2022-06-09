import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsStudioProfileComponent } from './bookings-studio-profile.component';

describe('BookingsStudioProfileComponent', () => {
  let component: BookingsStudioProfileComponent;
  let fixture: ComponentFixture<BookingsStudioProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsStudioProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsStudioProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
