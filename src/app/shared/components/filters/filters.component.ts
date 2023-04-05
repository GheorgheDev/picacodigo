import { FilterElement, SelectedFilter } from './../../models/filter-element';
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
    genre: [[]],
    mode: [[]]
  })

  filterList: SelectedFilter = {
    genres: [],
    modes: []
  };

  genreList: FilterElement[] = [
    {
      id: '1',
      name: 'Arcade'
    },
    {
      id: '3',
      name: 'Acción'
    },
    {
      id: '4',
      name: 'Aventura'
    },
    {
      id: '5',
      name: 'Carreras'
    },
    {
      id: '6',
      name: 'Combate'
    },
    {
      id: '7',
      name: 'Deportes'
    },
    {
      id: '8',
      name: 'Estrategia'
    },
    {
      id: '9',
      name: 'Lógica'
    },
    {
      id: '2',
      name: 'Plataformas'
    },
    {
      id: '10',
      name: 'Rol'
    },
    {
      id: '11',
      name: 'Simulación'
    },
    {
      id: '12',
      name: 'Terror'
    }
  ]

  modeList: FilterElement[] = [
    {
      id: '1',
      name: 'Individual'
    },
    {
      id: '2',
      name: 'Multijugador'
    }
  ];

  filterGenreElement(id: string[]) {
    this.filterList.genres = id;
    this.filterElement();
  }

  filterModeElement(id: string[]) {
    this.filterList.modes = id;
    this.filterElement();
  }

  @Output() filterIdList = new EventEmitter<SelectedFilter>();
  filterElement() {
    this.filterIdList.emit(this.filterList);
  }
}