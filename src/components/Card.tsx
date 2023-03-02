import { CardContainer } from "@/styles/components/Card";
import Image from "next/image";
import 'keen-slider/keen-slider.min.css'

interface CardProps {
  name: string
  image: string
  price: string
}

export function Card({ name, image, price }: CardProps) {

  return (
      <CardContainer className="keen-slider__slide">
        <Image src={image} width={520} height={480} alt='foto da camisa' />
        <footer>
          <strong>{name}</strong>
          <span>{price}</span>
        </footer>
      </CardContainer>
  )
}