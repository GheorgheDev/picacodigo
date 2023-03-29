export interface ReviewData{
    review_id: string
    content: string
    game_id: string 
    user_id: string
  }


export type NewReviewData = Omit<ReviewData, 'review_id'>