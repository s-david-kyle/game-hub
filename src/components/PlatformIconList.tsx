import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    nintendoswitch: SiNintendo,
    playstation4: FaPlaystation,
    xbox1: FaXbox,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.platformId}
          as={iconMap[platform.slug]}
          color="gray.500"
          boxSize={6}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
