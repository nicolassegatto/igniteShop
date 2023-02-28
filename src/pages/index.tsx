import { Card } from "@/components/Card";
import { HomeContainer } from "@/styles/pages/home";
import {useKeenSlider} from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";
import Stripe from "stripe";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({products}:HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView:3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      {products.map(product => {
        return <Card key={product.id} image={product.imageUrl} price={product.price} name={product.name} />
      })}
    </HomeContainer>
  )
}

export const getServerSideProps:GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  
  const products = response.data.map(OBJ => {
    const price = OBJ.default_price as Stripe.Price
    return {
      id: OBJ.id,
      name: OBJ.name,
      imageUrl: OBJ.images[0],
      price: price.unit_amount! / 100,

    }
  })

  return{
    props: {
      products,
    }
  }
}
