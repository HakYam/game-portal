
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { PlatformIconList } from './PlatformIconList'
import { CriticScore } from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import { Emoji } from './Emoji'
interface Props {
    game: Game
}


const GameCard = ({game} : Props) => {
  return (
    <Card width={'100%'} borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={"xl"}>{game.name} <Emoji rating={game.rating_top}/> </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard