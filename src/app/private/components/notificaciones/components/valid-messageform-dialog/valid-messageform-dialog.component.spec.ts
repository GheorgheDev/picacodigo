import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidMessageformDialogComponent } from './valid-messageform-dialog.component';

describe('ValidMessageformDialogComponent', () => {
  let component: ValidMessageformDialogComponent;
  let fixture: ComponentFixture<ValidMessageformDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidMessageformDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidMessageformDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
