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
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
            <Button onClick={() => console.log(genre)} fontSize={"sl"} overflow={'hidden'}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
