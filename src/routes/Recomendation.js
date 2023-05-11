import { Flex } from "@chakra-ui/react";
import RecomendationList from "../components/RecomendationList";

const Recomendation = () => {
  return (
    <Flex
      p={5}
      mx={"auto"}
      borderRadius={8}
      bgColor={"rgba(255, 255, 255, 0.7)"}
      flexDir={"column"}
      w={["96%", "90%", "85%", "70%"]}
      gap={[3]}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <RecomendationList />
    </Flex>
  );
};
export default Recomendation;
