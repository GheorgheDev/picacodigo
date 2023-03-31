import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProfilePhotoChangeComponent } from './dialog-profile-photo-change.component';

describe('DialogProfilePhotoChangeComponent', () => {
  let component: DialogProfilePhotoChangeComponent;
  let fixture: ComponentFixture<DialogProfilePhotoChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProfilePhotoChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProfilePhotoChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
