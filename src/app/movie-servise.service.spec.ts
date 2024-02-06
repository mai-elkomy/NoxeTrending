import { TestBed } from '@angular/core/testing';

import { MovieServiseService } from './movie-servise.service';

describe('MovieServiseService', () => {
  let service: MovieServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
