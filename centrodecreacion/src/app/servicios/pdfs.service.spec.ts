import { TestBed } from '@angular/core/testing';

import { PdfsService } from './pdfs.service';

describe('PdfsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfsService = TestBed.get(PdfsService);
    expect(service).toBeTruthy();
  });
});
