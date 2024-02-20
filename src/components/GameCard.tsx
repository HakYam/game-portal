import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Text } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames'
import { PlatformIconList } from './PlatformIconList'
interface Props {
    game: Game
}


const GameCard = ({game} : Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <img src={game.background_image} />
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
      </CardBody>
    </Card>
  );
}

export default GameCard