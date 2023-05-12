import { Flex, Text } from "@chakra-ui/react";

const CrudRecomendation = () => {
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
      <Text fontWeight={700} fontSize={["1rem", "1.5rem", "2rem"]}>
        Recomendações
      </Text>
    </Flex>
  );
};
export default CrudRecomendation;
