export interface GamePictureData{
    game_picture_id: string
    picture: string
    game_id: string
  }

  export type NewGamePictureData = Omit<GamePictureData, 'game_picture_id'>