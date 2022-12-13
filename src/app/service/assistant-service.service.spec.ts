import { TestBed } from '@angular/core/testing';

import { AssistantServiceService } from './assistant-service.service';

describe('AssistantServiceService', () => {
  let service: AssistantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssistantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
