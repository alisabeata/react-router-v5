import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
  const params = useParams()

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  )
}
