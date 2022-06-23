import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTheStudioComponent } from './book-the-studio.component';

describe('BookTheStudioComponent', () => {
  let component: BookTheStudioComponent;
  let fixture: ComponentFixture<BookTheStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTheStudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTheStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
