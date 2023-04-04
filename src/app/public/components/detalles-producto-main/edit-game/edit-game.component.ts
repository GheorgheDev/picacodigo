import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductData } from './../../../model/game-data';
import { Component, OnInit } from '@angular/core';
import { ModeData } from 'src/app/public/model/mode-data';
import { PegiData } from 'src/app/public/model/pegi-data';
import { GenreData } from 'src/app/public/model/genre-data';
import { SharedServicesService } from 'src/app/shared/services/shared-services.service';
import { ProductDetailServiceService } from '../services/product-detail-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
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
  
  game: ProductData = {} as ProductData
  gameModes: ModeData[] = this.modes
  gameGenres: GenreData[] = this.genres
  gamePegis: PegiData[] = this.pegis
  game_id: string = '0';
  game_idFromSS: string | null = sessionStorage.getItem('game_id');
  
  public editGameForm: FormGroup;



  constructor(public sharedServices: SharedServicesService, private _fb: FormBuilder, public productDetailServices: ProductDetailServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(!!this.game_idFromSS){
      this.game_id = this.game_idFromSS
    }
    this.bringDataFromDB()
    
  }

  bringDataFromDB(){
    console.log(this.game_id)
    this.sharedServices.getGameById(this.game_id).subscribe({
      next: gameSelected => {
        this.game = gameSelected
        
      },
      error: error => {
        console.log(error);
      },
      complete: () => {

        this.createForm()
      }
    });
  }


  createForm() {
  
    let gameToEdit: ProductData = this.game 

    this.editGameForm = this._fb.group({
      game_id: [gameToEdit.game_id],
      game_title: [gameToEdit.name, Validators.required],
      game_stars: [gameToEdit.stars, Validators.required],
      game_description: [gameToEdit.description, Validators.required],
      game_distributor: [gameToEdit.distributor, Validators.required],
      game_mode: [gameToEdit.mode_id, Validators.required],
      game_genre: [gameToEdit.category_id, Validators.required],
      game_pegi: [gameToEdit.pegi_id, Validators.required],
      game_price: [gameToEdit.price, Validators.required],
      game_stock: [gameToEdit.stock, Validators.required],
    });
  }


  editGame(){
    if(this.editGameForm.valid){
      let gameEdited: ProductData = {} as ProductData
      gameEdited.game_id = this.game_id
      gameEdited.name = this.editGameForm.value.game_title
      gameEdited.distributor = this.editGameForm.value.game_distributor
      gameEdited.stars = this.editGameForm.value.game_stars
      gameEdited.description = this.editGameForm.value.game_description
      gameEdited.pegi_id = this.editGameForm.value.game_pegi
      gameEdited.category_id = this.editGameForm.value.game_genre
      gameEdited.mode_id = this.editGameForm.value.game_mode
      gameEdited.price = this.editGameForm.value.game_price
      gameEdited.stock = this.editGameForm.value.game_stock
      console.log(gameEdited)

        this.productDetailServices.updateGame(gameEdited).subscribe({
          next: respuesta => {
            console.log("esto es el juego editado: ", respuesta);
          },
          error: error => {
            console.log(error);
          },
          complete: () => {
            console.log("terminado")
          }
        });

    }else{
      alert("Formulario inválido, no se hizo ningún cambio")
    }}

    openSnackBar() {
      this._snackBar.open('Los cambios se han guardado correctamente', '', {
        duration: 1000
      });
    }

  }