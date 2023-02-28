import { styled } from "@/styles"

const Button = styled('button',{
  backgroundColor:'$rocketseat',
  borderRadius: 4,
  border: 0,
  padding:5,
  span: {
    fontWeight:'bold'
  },
  '&:hover':{
    filter: 'brightness(0.8)'
  },
  cursor: 'pointer'
})

export default function Home() {
  return (
    <Button><span>Teste</span>Enviar</Button>
  )
}
