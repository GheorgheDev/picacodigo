import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


import { MatDialog } from '@angular/material/dialog';

import { PegiData } from 'src/app/public/model/pegi-data';
import { GenreData } from 'src/app/public/model/genre-data';
import { ModeData } from 'src/app/public/model/mode-data';
import { ValidGameFormComponent } from '../valid-game-form/valid-game-form.component';
import { InvalidGameFormComponent } from '../invalid-game-form/invalid-game-form.component';
import { GenerateNewGameServiceService } from '../../services/generate-new-game-service.service';
import { NewProductData } from 'src/app/public/model/game-data';
import { NewGamePictureData } from 'src/app/public/model/game-picture-data';

@Component({
  selector: 'app-generar-nuevo-juego',
  templateUrl: './generar-nuevo-juego.component.html',
  styleUrls: ['./generar-nuevo-juego.component.scss'],
})
export class GenerarNuevoJuegoComponent implements OnInit {

  pegis: PegiData[] = [
    {
      pegi_id: '3',
      name: 'PEGI 3',
    },
    {
      pegi_id: '7',
      name: 'PEGI 7',
    },
    {
      pegi_id: '12',
      name: 'PEGI 12',
    },
    {
      pegi_id: '16',
      name: 'PEGI 16',
    },
    {
      pegi_id: '18',
      name: 'PEGI 18',
    },
    {
      pegi_id: 'OK',
      name: 'PEGI OK',
    },
  ];

  genres: GenreData[] = [
    {
      category_id: '1',
      name: 'Arcade',
    },
    {
      category_id: '4',
      name: 'Aventura',
    },
    {
      category_id: '3',
      name: 'Acción',
    },
    {
      category_id: '5',
      name: 'Carreras',
    },
    {
      category_id: '6',
      name: 'Combate',
    },
    {
      category_id: '7',
      name: 'Deportes',
    },
    {
      category_id: '8',
      name: 'Estrategia',
    },
    {
      category_id: '9',
      name: 'Lógica',
    },
    {
      category_id: '2',
      name: 'Plataformas',
    },
    {
      category_id: '10',
      name: 'Rol',
    },
    {
      category_id: '11',
      name: 'Simulación',
    },
    {
      category_id: '12',
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
  
  userType: string = '0';

  userTypeFromSS: string | null = sessionStorage.getItem('userType');

  gameModes: ModeData[] = this.modes
  gameGenres: GenreData[] = this.genres
  gamePegis: PegiData[] = this.pegis

  createdGame: NewProductData = {} as NewProductData

  constructor(private _fb: FormBuilder, public dialog: MatDialog, private generateNewGame: GenerateNewGameServiceService) {}

  

  ngOnInit(): void {
    if(!!this.userTypeFromSS){
      this.userType = this.userTypeFromSS
    }
  }

  //validacion
  addGameForm: FormGroup = this._fb.group({
    game_name: ['', [Validators.required]],
    game_distributor: ['', [Validators.required]],
    game_stars: ['', [Validators.required]],
    game_description: ['', [Validators.required]],
    game_pegi: ['', [Validators.required]],
    game_category: ['', [Validators.required]],
    game_mode: ['', [Validators.required]],
    game_stock: ['', [Validators.required]],
    game_price: ['', [Validators.required]],
  });



  addGame() {
    if (this.addGameForm.invalid) {
      this.addGameForm.markAllAsTouched();
      this.dialog.open(InvalidGameFormComponent);
    } else {
      this.createdGame.name = this.addGameForm.value['game_name'];
      this.createdGame.distributor = this.addGameForm.value['game_distributor'];
      this.createdGame.stars = this.addGameForm.value['game_stars'];
      this.createdGame.description = this.addGameForm.value['game_description'];
      this.createdGame.pegi_id = this.addGameForm.value['game_pegi'];
      this.createdGame.category_id = this.addGameForm.value['game_category'];
      this.createdGame.mode_id = this.addGameForm.value['game_mode'];
      this.createdGame.price = this.addGameForm.value['game_price'];
      this.createdGame.stock = this.addGameForm.value['game_stock'];
      console.log(this.createdGame.name)
      this.addNewGameToDB()
/*       this.addGameForm.reset()
 */      
    }
  }

  addNewGameToDB(){
    console.log("esto es game: ", this.createdGame)
    this.generateNewGame.addNewGame(this.createdGame).subscribe({
      next: createdGameId => {
        console.log("esto es el id del game created: ", createdGameId);
        this.createNewGameNotAvailablePictures( createdGameId )
      },
      error: error => {
        console.log(error);
        console.log("error del add game")
      },
      complete: () => {
        this.dialog.open(ValidGameFormComponent);
      }
    });
  }

  createNewGameNotAvailablePictures(newGameId:string){
    const NOT_AVAILABLE_PICTURE:string = '/assets/media/media-products/not-available/Imagen_no_disponible.png'
    let newNotAvailablePicture: NewGamePictureData ={} as NewGamePictureData
    newNotAvailablePicture.game_id = newGameId
    newNotAvailablePicture.picture = NOT_AVAILABLE_PICTURE
    for(let i = 0 ; i < 2; i++){
      this.generateNewGame.addNewGamePicture(newNotAvailablePicture).subscribe({
        next: createdGamePictureId => {
          console.log("esto es el id del picture created: ", createdGamePictureId);
        },
        error: error => {
          console.log(error);
          console.log("error del add game")
        }
      });
    }
  }



}
