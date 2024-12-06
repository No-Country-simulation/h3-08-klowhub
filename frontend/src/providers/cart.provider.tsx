'use client'
import { Product, ProductCart } from '@/models'
import { MIN_PRODUCT_QUANTITY } from '@/utils'
import { createContext, useState } from 'react'

export interface CartContextState {
  cart: ProductCart[]
  addProductToCart: (product: ProductCart) => void
  removeProductFromCart: (product: ProductCart) => void
  increaseProductQuantity: (product: ProductCart) => void
  decreaseProductQuantity: (product: ProductCart) => void
  isProductInCart: (product: Product) => boolean
  calculateTotal: () => number
  clearCart: () => void
}

export const CartContext = createContext<CartContextState | null>(null)

interface CartProviderProps {
  children: React.ReactNode
}

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ProductCart[]>([])

  const addProductToCart = (product: ProductCart) => {
    setCart((prevCart) => [...prevCart, product])
  }

  const removeProductFromCart = (product: ProductCart) => {
    setCart((prevCart) => prevCart.filter((cartProduct) => cartProduct.id !== product.id))
  }

  const increaseProductQuantity = (product: ProductCart) => {
    setCart((prevCart) =>
      prevCart.map((p) => {
        if (p.id === product.id) return { ...p, quantity: p.quantity + MIN_PRODUCT_QUANTITY }
        return p
      })
    )
  }

  const decreaseProductQuantity = (product: ProductCart) => {
    setCart((prevCart) =>
      prevCart.map((p) => {
        if (p.id === product.id) return { ...p, quantity: p.quantity - MIN_PRODUCT_QUANTITY }
        return p
      })
    )
  }

  const isProductInCart = (product: Product) => {
    return cart.some((p) => p.id === product.id)
  }

  const clearCart = () => {
    setCart([])
  }

  const calculateTotal = () => {
    return cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
  }

  const values = {
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
