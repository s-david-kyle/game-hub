import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score >= 90 ? "green" : score >= 80 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="18px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
