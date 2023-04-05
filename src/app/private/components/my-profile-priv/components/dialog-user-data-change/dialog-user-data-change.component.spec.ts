import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserDataChangeComponent } from './dialog-user-data-change.component';

describe('DialogUserDataChangeComponent', () => {
  let component: DialogUserDataChangeComponent;
  let fixture: ComponentFixture<DialogUserDataChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUserDataChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUserDataChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
