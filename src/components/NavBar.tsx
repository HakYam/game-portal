import { HStack , Image, Text} from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwith'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding={2}>
        <Image src={logo} boxSize='60px'/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar