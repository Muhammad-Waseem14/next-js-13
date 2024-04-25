import React from 'react'

interface Props {
    params: { slug: string []}
}

function ProductDetailPage({params: {slug}}: Props) {
  return (
    <div>
      {/* To catch all segmanent like /products or /products/dairy or /products/dairy/milk */}
      Product Details Page {slug} 
    </div>
  )
}

export default ProductDetailPage
