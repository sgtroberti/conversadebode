import { Flex, Text } from "@chakra-ui/react";
import RecomendationCard from "../RecomendationCard";

const RecomendationList = () => {
  return (
    <Flex
      bgColor={"rgba(255, 255, 255, 0.7)"}
      borderRadius={8}
      p={2}
      justifyContent={"center"}
      w="100%"
      flexDir={"column"}
    >
      <Text
        w="100%"
        fontWeight={700}
        fontSize={["1rem", "1.5rem", "2rem"]}
        textAlign={"center"}
        p={2}
      >
        Bode Recomenda!
      </Text>
      <Text textAlign={"justify"}>
        Estas recomendações foram selecionadas por ser material desenvolvido por
        ex-entrevistados no canal e/ou pessoas que contribuíram para o
        crescimento do mesmo. Caso você queira anunciar seu livro ou outro tipo
        de material aqui, por favor, entre em contato!
      </Text>

      {/* <Flex p={5} justifyContent={"space-between"} gap={3} wrap={"wrap"}>
        {recomendations.map((recomendation) => (
          <RecomendationCard
            key={recomendation.id}
            recomendation={recomendation}
          />
        ))}
      </Flex> */}
    </Flex>
  );
};
export default RecomendationList;
