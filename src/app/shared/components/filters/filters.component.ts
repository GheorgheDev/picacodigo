import { FilterElement } from './../../models/filter-element';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  filterForm: FormGroup = this.fb.group({
    genre: [[]]
  })

  genreList: FilterElement[] = [
    {
      id: 10,
      name: 'Arcade'
    },
    {
      id: 11,
      name: 'Acción'
    },
    {
      id: 12,
      name: 'Aventura'
    },
    {
      id: 13,
      name: 'Carreras'
    },
    {
      id: 14,
      name: 'Combate'
    },
    {
      id: 15,
      name: 'Deportes'
    },
    {
      id: 16,
      name: 'Estrategia'
    },
    {
      id: 17,
      name: 'Lógica'
    },
    {
      id: 18,
      name: 'Plataformas'
    },
    {
      id: 19,
      name: 'Rol'
    },
    {
      id: 20,
      name: 'Simulación'
    },
    {
      id: 21,
      name: 'Terror'
    }
  ];

  @Output() filterGenre = new EventEmitter<number>();
  filterGenreElement(id: number) {
    this.filterGenre.emit(id);
  }

}