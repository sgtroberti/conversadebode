import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const LastEpisode = ({ lastEp }) => {
  return (
    <Flex
      flexDir={"column"}
      w="100%"
      alignItems={"center"}
      gap={5}
      p={5}
      bgColor={"rgba(255,255,255,0.6)"}
      borderRadius={8}
    >
      <Text fontWeight={700} fontSize={["1.2rem", "1.5rem", "2rem"]}>
        Último Episódio
      </Text>
      <Flex
        flexDir={["column", "column", "column", "row"]}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
      >
        <Image
          src={lastEp.image || "./assets/yt.png"}
          w={["100%", "100%", "100%", "45%", "55%"]}
          borderRadius={8}
        />

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
          <Text noOfLines={3}>{lastEp.description}</Text>
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
                    Ouvir no Spotify
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
