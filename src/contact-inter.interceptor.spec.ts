import { TestBed } from '@angular/core/testing';

import { ContactInterInterceptor } from './contact-inter.interceptor';

describe('ContactInterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ContactInterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ContactInterInterceptor = TestBed.inject(ContactInterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
