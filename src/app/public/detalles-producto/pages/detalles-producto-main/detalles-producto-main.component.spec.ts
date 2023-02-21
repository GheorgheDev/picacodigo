import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesProductoMainComponent } from './detalles-producto-main.component';

describe('DetallesProductoMainComponent', () => {
  let component: DetallesProductoMainComponent;
  let fixture: ComponentFixture<DetallesProductoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesProductoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesProductoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
