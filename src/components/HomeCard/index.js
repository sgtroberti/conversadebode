import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsInstagram, BsYoutube, BsSpotify } from "react-icons/bs";

const HomeCard = () => {
  return (
    <>
      <Flex
        justifyContent={["space-between"]}
        alignItems={["center"]}
        gap={5}
        p={5}
        bgColor={"rgba(255,255,255,0.6)"}
        borderRadius={8}
        flexDir={["column", "row"]}
      >
        <Image src="./assets/yt.png" maxH={["70px", "80px", "130px"]} />
        <Flex flexDir={"column"} gap={3}>
          <Text fontWeight={700} fontSize={["1rem", "1.5rem", "2rem"]}>
            Seja Bem vindo!
          </Text>
          <Text textAlign={"justify"} w={"100%"}>
            Um projeto visando desmistificar o que é maçonaria e difundir a
            cultura maçônica a irmãos maçons e não-membros. A melhor arma contra
            o preconceito é o conhecimento!
          </Text>
          <Flex gap={10} justifyContent={["center", "flex-start"]}>
            <Link
              target="_blank"
              to={"https://www.instagram.com/conversadebode/"}
            >
              <Icon w={8} h={8} color="#dd2a7b" as={BsInstagram} />
            </Link>
            <Link
              target="_blank"
              to={"https://www.youtube.com/@conversadebode"}
            >
              <Icon w={8} h={8} color="#c4302b" as={BsYoutube} />
            </Link>
            <Link
              target="_blank"
              to={"https://open.spotify.com/show/1sl5POT7xGlwhKqmwSKjJx"}
            >
              <Icon w={8} h={8} color="#1db954" as={BsSpotify} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeCard;
