import { GamePictureData } from './../../../public/model/game-picture-data';
import { Component, Input, OnInit } from '@angular/core';
import { ProductData } from '../../models/product-data';
import { SharedServicesService } from '../../services/shared-services.service';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {



  /* get all pictures of A game */
  gamePictures: GamePictureData[] = [];

  @Input() product: ProductData;

  constructor(public sharedServices: SharedServicesService) {}

  gamePicture: string;

  ngOnInit(): void {
    console.log("Estrellas:",this.product.stars)
    if(!!this.product.game_id){
      this.sharedServices.getAllPicturesByGameId(this.product.game_id).subscribe(pictureResult => {
        console.log('pictureResult:', pictureResult);
        this.gamePictures = pictureResult;
        if (this.gamePictures.length > 0) {
          this.gamePicture = this.gamePictures[0].picture;
        }
      });
    }
    
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

  saveGameIdInSS(game_id:string | undefined){
    if(!!game_id)
      sessionStorage.setItem('game_id', game_id)
  }
}
