import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileControlsComponent } from './file-controls.component';

describe('FileControlsComponent', () => {
  let component: FileControlsComponent;
  let fixture: ComponentFixture<FileControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
