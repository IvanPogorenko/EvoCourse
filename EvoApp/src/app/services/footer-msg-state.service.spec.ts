import { TestBed } from '@angular/core/testing';

import { FooterMsgStateService } from './footer-msg-state.service';

describe('FooterMasgStateService', () => {
  let service: FooterMsgStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterMsgStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
