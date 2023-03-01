import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'
import {useRouter} from 'next/router'

export default function Product() {
  
  const {query} = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>CamisetaX</h1>
        <span>R$79,90</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure eveniet esse itaque ex fuga sequi enim, et excepturi doloribus eius modi maxime natus blanditiis, ducimus perspiciatis dolores sed est.</p>
      
        <button>
          Comprar Agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}