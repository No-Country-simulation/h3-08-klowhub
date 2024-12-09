'use client'
import { Product, ProductCart } from '@/models'
import { MIN_PRODUCT_QUANTITY } from '@/utils'
import { createContext, useState } from 'react'

export interface CartContextState {
  /**
   * The products in the cart.
   */
  cart: ProductCart[]
  /**
   * Adds a product to the cart.
   * @param product - The product to add to the cart.
   */
  addProductToCart: (product: ProductCart) => void
  /**
   * Removes a product from the cart.
   * @param product - The product to remove from the cart.
   */
  removeProductFromCart: (product: ProductCart) => void
  /**
   * Increases the quantity of a product in the cart.
   * @param product - The product to increase the quantity.
   */
  increaseProductQuantity: (product: ProductCart) => void
  /**
   * Decreases the quantity of a product in the cart.
   * @param product - The product to decrease the quantity.
   */
  decreaseProductQuantity: (product: ProductCart) => void
  /**
   * Checks if a product is in the cart.
   * @param product - The product to check.
   * @returns True if the product is in the cart, false otherwise.
   */
  isProductInCart: (product: Product) => boolean
  /**
   * Calculates the total price of the cart.
   */
  calculateTotal: () => number
  /**
   * Clears the cart.
   */
  clearCart: () => void
}

export const CartContext = createContext<CartContextState | null>(null)

interface CartProviderProps {
  children: React.ReactNode
}

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ProductCart[]>([])

  /**
   * Adds a product to the cart.
   * @param product - The product to add to the cart.
   */
  const addProductToCart = (product: ProductCart) => {
    setCart((prevCart) => [...prevCart, product])
  }

  /**
   * Removes a product from the cart.
   * @param product - The product to remove from the cart.
   */
  const removeProductFromCart = (product: ProductCart) => {
    setCart((prevCart) => prevCart.filter((cartProduct) => cartProduct.id !== product.id))
  }

  /**
   * Increases the quantity of a product in the cart.
   * @param product - The product to increase the quantity.
   */
  const increaseProductQuantity = (product: ProductCart) => {
    setCart((prevCart) =>
      prevCart.map((p) => {
        if (p.id === product.id) return { ...p, quantity: p.quantity + MIN_PRODUCT_QUANTITY }
        return p
      })
    )
  }

  /**
   * Decreases the quantity of a product in the cart.
   * @param product - The product to decrease the quantity.
   */
  const decreaseProductQuantity = (product: ProductCart) => {
    setCart((prevCart) =>
      prevCart.map((p) => {
        if (p.id === product.id) return { ...p, quantity: p.quantity - MIN_PRODUCT_QUANTITY }
        return p
      })
    )
  }

  /**
   * Checks if a product is in the cart.
   * @param product - The product to check.
   * @returns True if the product is in the cart, false otherwise.
   */
  const isProductInCart = (product: Product) => {
    return cart.some((p) => p.id === product.id)
  }

  /**
   * Clears the cart.
   */
  const clearCart = () => {
    setCart([])
  }

  /**
   * Calculates the total price of the cart.
   */
  const calculateTotal = () => {
    return cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
  }

  const values: CartContextState = {
    cart,
    addProductToCart,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    isProductInCart,
    calculateTotal,
    clearCart
  }

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

export { CartProvider }
