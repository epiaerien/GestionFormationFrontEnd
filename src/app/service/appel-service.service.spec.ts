import { TestBed } from '@angular/core/testing';

import { AppelServiceService } from './appel-service.service';

describe('AppelServiceService', () => {
  let service: AppelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
