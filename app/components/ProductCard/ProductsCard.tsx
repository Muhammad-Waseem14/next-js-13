import React from 'react'
import AddToCart from '../AddToCart'
import styles from './ProductCard.module.css'

function ProductsCard() {
  return (
    <div className={styles.card}>
      <AddToCart />
    </div>
  )
}

export default ProductsCard
