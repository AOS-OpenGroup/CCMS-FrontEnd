import { TestBed } from '@angular/core/testing';

import { StudioProfileService } from './studio-profile.service';

describe('StudioProfileService', () => {
  let service: StudioProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudioProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
