import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Center,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ( { selectedGenre, onSelectGenre}: Props ) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) {
    return (
      <Center width="full">
        <Spinner />
      </Center>
    );
  }

  if (error) return <Text>Something went wrong!</Text>;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize={"sl"}
              overflow={"hidden"}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
