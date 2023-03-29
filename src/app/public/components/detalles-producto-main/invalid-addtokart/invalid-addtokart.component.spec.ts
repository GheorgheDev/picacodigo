import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidAddtokartComponent } from './invalid-addtokart.component';

describe('InvalidAddtokartComponent', () => {
  let component: InvalidAddtokartComponent;
  let fixture: ComponentFixture<InvalidAddtokartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidAddtokartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidAddtokartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
