import { TestBed, inject } from '@angular/core/testing';

import { ImageStorageService } from './image-storage.service';

describe('ImageStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageStorageService]
    });
  });

  it('should be created', inject([ImageStorageService], (service: ImageStorageService) => {
    expect(service).toBeTruthy();
  }));
});
