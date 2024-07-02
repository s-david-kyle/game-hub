import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}
// interface

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.uri}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {game.platforms.map((platform) => (
          <Text>{platform.name}</Text>
        ))}
      </CardBody>
    </Card>
  );
};

export default GameCard;
