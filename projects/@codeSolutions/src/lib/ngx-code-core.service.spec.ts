import { TestBed } from '@angular/core/testing';

import { NgxCodeCoreService } from './ngx-code-core.service';

describe('NgxCodeCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCodeCoreService = TestBed.get(NgxCodeCoreService);
    expect(service).toBeTruthy();
  });
});
