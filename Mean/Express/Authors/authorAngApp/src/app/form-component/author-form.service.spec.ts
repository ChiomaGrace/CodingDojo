import { TestBed } from '@angular/core/testing';

import { AuthorFormService } from './author-form.service';

describe('AuthorFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorFormService = TestBed.get(AuthorFormService);
    expect(service).toBeTruthy();
  });
});
