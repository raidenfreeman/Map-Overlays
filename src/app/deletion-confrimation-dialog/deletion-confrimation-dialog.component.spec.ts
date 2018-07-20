import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletionConfirmationDialogComponent } from './deletion-confrimation-dialog.component';

describe('DeletionConfrimationDialogComponent', () => {
  let component: DeletionConfirmationDialogComponent;
  let fixture: ComponentFixture<DeletionConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletionConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletionConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
