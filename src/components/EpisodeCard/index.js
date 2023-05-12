import { Badge, Box, Icon, Image } from "@chakra-ui/react";
import { addHours, format } from "date-fns";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const EpisodeCard = ({ episode }) => {
  return (
    <Box
      bgColor={"white"}
      borderWidth="1px"
      borderColor={"#ccc"}
      borderRadius="lg"
      overflow="hidden"
      p={5}
      w={["100%", "100%", "45%", "45%", "45%", "29%"]}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Link target="_blank" to={episode.youtube}>
        <Image
          src={episode.image || "./assets/yt.png"}
          maxW={"100%"}
          maxH={"150px"}
          alt={"capa"}
          borderRadius={8}
        />
      </Link>
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge
            borderRadius="full"
            px="2"
            variant="subtle"
            colorScheme="green"
          >
            {episode.type}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {format(addHours(new Date(episode.date), 3), "dd/MM/yyyy")}
          </Box>
        </Box>
      </Box>
      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        noOfLines={2}
      >
        {episode.title} - {episode.interviewed}
      </Box>
      <Box display="flex" mt="2" alignItems="center" gap={5}>
        <Link target="_blank" to={episode.youtube}>
          <Icon
            w={10}
            h={10}
            color="#c4302b"
            bgColor={"white"}
            as={BsYoutube}
          />
        </Link>
        <Link target="_blank" to={episode.spotify}>
          <Icon w={10} h={10} color="#1db954" as={BsSpotify} />
        </Link>
      </Box>
    </Box>
  );
};
export default EpisodeCard;
