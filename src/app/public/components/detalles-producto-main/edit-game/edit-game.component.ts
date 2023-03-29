import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameData } from './../../../model/game-data';
import { Component, OnInit } from '@angular/core';
import { ModeData } from 'src/app/public/model/mode-data';
import { PegiData } from 'src/app/public/model/pegi-data';
import { GenreData } from 'src/app/public/model/genre-data';


@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  game: GameData = 
    {
      game_id: '1',
      name: 'Red Dead Redemption II',
      distributor: 'Rockstar Games',
      stars: 5,
      description:
        'Red Dead Redemption II, estilizado Red Dead Redemption II, es un videojuego de acción-aventura western basado en el drama, en un mundo abierto y en perspectiva de primera y tercera persona, con componentes para un jugador y multijugador.',
      pegi_id: '3',
      genre_id: '10',
      mode_id: '1',
      price: 54.99,
      stock: 100,
    }
  
    pegis: PegiData[] = [
      {
        pegi_id: '1',
        name: 'PEGI 3',
      },
      {
        pegi_id: '2',
        name: 'PEGI 7',
      },
      {
        pegi_id: '3',
        name: 'PEGI 12',
      },
      {
        pegi_id: '4',
        name: 'PEGI 16',
      },
      {
        pegi_id: '5',
        name: 'PEGI 18',
      },
      {
        pegi_id: '6',
        name: 'PEGI OK',
      },
    ];
  
    genres: GenreData[] = [
      {
        genre_id: '10',
        name: 'Arcade',
      },
      {
        genre_id: '12',
        name: 'Aventura',
      },
      {
        genre_id: '11',
        name: 'Acción',
      },
      {
        genre_id: '13',
        name: 'Carreras',
      },
      {
        genre_id: '14',
        name: 'Combate',
      },
      {
        genre_id: '15',
        name: 'Deportes',
      },
      {
        genre_id: '16',
        name: 'Estrategia',
      },
      {
        genre_id: '17',
        name: 'Lógica',
      },
      {
        genre_id: '18',
        name: 'Plataformas',
      },
      {
        genre_id: '19',
        name: 'Rol',
      },
      {
        genre_id: '20',
        name: 'Simulación',
      },
      {
        genre_id: '21',
        name: 'Terror',
      },
    ];
  
    modes: ModeData[] = [
      {
        mode_id: '1',
        name: 'Individual',
      },
      {
        mode_id: '2',
        name: 'Multijugador',
      },
    ];

  constructor(private _fb: FormBuilder) { }

  editGameForm: FormGroup;

  ngOnInit(): void {
    this.createForm()
  }

  gameToEdit: GameData = this.game
  

  gameModes: ModeData[] = this.modes
  gameGenres: GenreData[] = this.genres
  gamePegis: PegiData[] = this.pegis




  createForm() {
    this.editGameForm = this._fb.group({
      game_title: [this.gameToEdit.name, [Validators.required]],
      game_stars: [this.gameToEdit.stars, [Validators.required]],
      game_description: [this.gameToEdit.description, [Validators.required]],
      game_distributor: [this.gameToEdit.distributor, [Validators.required]],
      game_mode: [this.gameToEdit.mode_id, [Validators.required]],
      game_genre: [this.gameToEdit.genre_id, [Validators.required]],
      game_pegi: [this.gameToEdit.pegi_id, [Validators.required]],
      game_price: [this.gameToEdit.price, [Validators.required]],
      game_stock: [this.gameToEdit.stock, [Validators.required]],
    });
  }


  editGame(){
    if(this.editGameForm.valid){
      let gameEdited: GameData = {} as GameData
      gameEdited.name = this.editGameForm.value.game_title
      gameEdited.distributor = this.editGameForm.value.game_distributor
      gameEdited.stars = this.editGameForm.value.game_stars
      gameEdited.description = this.editGameForm.value.game_description
      gameEdited.pegi_id = this.editGameForm.value.game_pegi
      gameEdited.genre_id = this.editGameForm.value.game_genre
      gameEdited.mode_id = this.editGameForm.value.game_mode
      gameEdited.price = this.editGameForm.value.game_price
      gameEdited.stock = this.editGameForm.value.game_stock
      console.log(gameEdited)
    }else{
      alert("Formulario inválido, no se hizo ningún cambio")
    }
  }


}
