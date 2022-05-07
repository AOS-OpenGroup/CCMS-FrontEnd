import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioProfileComponent } from './studio-profile.component';

describe('StudioProfileComponent', () => {
  let component: StudioProfileComponent;
  let fixture: ComponentFixture<StudioProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
