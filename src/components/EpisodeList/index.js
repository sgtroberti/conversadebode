import { Flex, Text } from "@chakra-ui/react";
import EpisodeCard from "../EpisodeCard";

const EpisodeList = ({ episodes }) => {
  return (
    <Flex
      flexDir={"column"}
      w="100%"
      justifyContent={"center"}
      gap={5}
      p={5}
      bgColor={"rgba(255,255,255,0.6)"}
      borderRadius={8}
    >
      <Text
        textAlign={"center"}
        fontWeight={700}
        fontSize={["1.2rem", "1.5rem", "2rem"]}
      >
        Lista de Episódios
      </Text>
      <Flex p={5} justifyContent={"space-between"} gap={5} wrap={"wrap"}>
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </Flex>
    </Flex>
  );
};
export default EpisodeList;
