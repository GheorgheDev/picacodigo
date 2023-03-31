import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidGameFormComponent } from './invalid-game-form.component';

describe('InvalidGameFormComponent', () => {
  let component: InvalidGameFormComponent;
  let fixture: ComponentFixture<InvalidGameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidGameFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidGameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
