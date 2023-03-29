import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidGameFormComponent } from './valid-game-form.component';

describe('ValidGameFormComponent', () => {
  let component: ValidGameFormComponent;
  let fixture: ComponentFixture<ValidGameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidGameFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidGameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
