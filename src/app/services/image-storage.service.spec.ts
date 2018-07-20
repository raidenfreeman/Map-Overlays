import { TestBed, inject } from '@angular/core/testing';

import { MapService } from './image-storage.service';

describe('ImageStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapService]
    });
  });

  it('should be created', inject([MapService], (service: MapService) => {
    expect(service).toBeTruthy();
  }));
});
