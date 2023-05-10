import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const LastEpisode = ({ lastEp }) => {
  return (
    <Flex
      flexDir={"column"}
      w="100%"
      borderTop={"2px solid #ccc"}
      alignItems={"center"}
      gap={5}
    >
      <Text fontWeight={700} fontSize={["1.2rem", "1.5rem", "2rem"]}>
        Último Episódio
      </Text>
      <Flex
        flexDir={["column", "column", "column", "row"]}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={5}
      >
        <Image src={lastEp.image} w={["50%", "40%", "35%", "25%"]} />
        <Flex
          flexDir={["column"]}
          alignItems={"center"}
          gap={8}
          bgColor={"white"}
          p={5}
          borderRadius={8}
        >
          <Text fontWeight={700} fontSize={["1.1rem", "1.3rem", "1.5rem"]}>
            {lastEp.title} - {lastEp.interviewed}
          </Text>
          <Flex gap={[10, 20]}>
            <Flex>
              <Link target="_blank" to={lastEp.youtube}>
                <Flex alignItems={"center"} flexDir={"column"} gap={2}>
                  <Icon w={20} h={20} color="#c4302b" as={BsYoutube} />
                  <Text textAlign={"center"} fontWeight={500}>
                    Assistir no Youtube
                  </Text>
                </Flex>
              </Link>
            </Flex>
            <Flex>
              <Link target="_blank" to={lastEp.spotify}>
                <Flex alignItems={"center"} flexDir={"column"} gap={2}>
                  <Icon w={20} h={20} color="#1db954" as={BsSpotify} />
                  <Text textAlign={"center"} fontWeight={500}>
                    Assistir no Spotify
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default LastEpisode;
