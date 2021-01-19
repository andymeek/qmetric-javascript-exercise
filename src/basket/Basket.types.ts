import type { Product } from 'products/products.types'

type Basket = Product & {
  basketPrice: number
  id?: string
  priceWithSavings?: number
  savings?: number
}

type PropTypes = {
  basket: Array<Basket>
  removeItemFromBasket: (basketItem: Basket) => void
}

export type { Basket, PropTypes }
