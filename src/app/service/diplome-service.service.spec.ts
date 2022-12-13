import { TestBed } from '@angular/core/testing';

import { DiplomeServiceService } from './diplome-service.service';

describe('DiplomeServiceService', () => {
  let service: DiplomeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiplomeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
