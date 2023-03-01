import logoImg from '../assets/igniteLogo.svg'
import {HeaderStyle} from '@/styles/components/Header'
import Image from 'next/image'

export function Header() {
  return(
    <HeaderStyle href='/'>
      <Image src={logoImg} alt="LOGO IGNITE Shop" />
    </HeaderStyle>
  )
}