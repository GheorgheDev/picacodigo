import { GamePictureData } from './../../../public/model/game-picture-data';
import { Component, Input, OnInit } from '@angular/core';
import { ProductData } from '../../models/product-data';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  /* get all pictures of A game */
  gamePictures: GamePictureData[] = [
    {
      game_picture_id: '2',
      picture: '/assets/game.jpg',
      game_id: '1',
    },
    {
      game_picture_id: '1',
      picture: '/assets/1.jpg',
      game_id: '1',
    },
    {
      game_picture_id: '3',
      picture: '/assets/2.jpg',
      game_id: '1',
    },
    {
      game_picture_id: '4',
      picture: '/assets/3.jpg',
      game_id: '1',
    }
  ];

  @Input() product: ProductData;
  constructor() {}

  gamePicture:string= this.gamePictures[0].picture;

  ngOnInit(): void {

  }
  
  showStars(stars: number | undefined) : string {
    switch (stars) {
      case 1: return '★✩✩✩✩'
      case 2: return '★★✩✩✩'
      case 3: return '★★★✩✩'
      case 4: return '★★★★✩'
      case 5: return '★★★★★'
    }
    return ''
  }

  
}