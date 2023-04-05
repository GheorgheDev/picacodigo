export interface ProductData {
  game_id: string
  name: string
  distributor: string
  stars: number
  description: string
  pegi_id: string
  category_id: string
  mode_id: string
  price: number
  stock: number
}
export type NewProductData = Omit<ProductData, 'game_id'>