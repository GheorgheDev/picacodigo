import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarNuevoJuegoComponent } from './generar-nuevo-juego.component';

describe('GenerarNuevoJuegoComponent', () => {
  let component: GenerarNuevoJuegoComponent;
  let fixture: ComponentFixture<GenerarNuevoJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarNuevoJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarNuevoJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
