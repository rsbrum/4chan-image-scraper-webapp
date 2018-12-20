import { TestBed } from '@angular/core/testing';

import { ScraperService } from './scraper.service';

describe('ScraperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScraperService = TestBed.get(ScraperService);
    expect(service).toBeTruthy();
  });
});
