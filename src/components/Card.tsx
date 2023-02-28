import { CardContainer } from "@/styles/components/Card";
import Image from "next/image";
import 'keen-slider/keen-slider.min.css'
import camiseta1 from '../assets/Tshirts/1.svg'

interface CardProps {
  name: string
  image: string
  price: number
}

export function Card({ name, image, price}:CardProps) {

  return (
    <CardContainer className="keen-slider__slide">
      <Image src={image} width={520} height={480} alt='foto da camisa'/>
      <footer>
        <strong>{name}</strong>
        <span>R${price}</span>
      </footer>
    </CardContainer>
  )
}