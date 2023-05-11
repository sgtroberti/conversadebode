import { Badge, Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

const RecomendationCard = ({ recomendation }) => {
  return (
    <Box
      bgColor={"white"}
      borderWidth="1px"
      borderColor={"#ccc"}
      borderRadius="lg"
      overflow="hidden"
      p={5}
      w={["100%", "100%", "45%", "45%", "45%", "30%"]}
      display={"flex"}
      alignItems={"center"}
    >
      <Link target="_blank" to={recomendation.where}>
        <Image
          src={recomendation.image || "./assets/yt.png"}
          maxW={"150px"}
          maxH={"190px"}
          alt={"capa"}
          borderRadius={8}
        />
      </Link>
      <Flex alignSelf={"flex-start"} p={3}>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
          flexDir={"column"}
        >
          <Badge
            borderRadius={"full"}
            px={2}
            textAlign={"center"}
            colorScheme="teal"
          >
            {recomendation.type}
          </Badge>
          <>
            <Text fontWeight={600} textAlign={"center"} fontSize={"1.2rem"}>
              {recomendation.name}
            </Text>
            <Text fontWeight={400} fontSize={"0.8rem"}>
              {recomendation.creator}
            </Text>
          </>

          <Link target="_blank" to={recomendation.where}>
            <Icon w={10} h={10} color="#002c86" as={BsCartFill} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default RecomendationCard;
