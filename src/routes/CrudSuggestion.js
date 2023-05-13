import { useEffect, useState } from "react";
import client from "../services/client";
import { Flex, Spinner, Table, Text, Th, Thead, Tr } from "@chakra-ui/react";
import SuggestionCard from "../components/SuggestionCard";

const CrudSuggestion = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const request = async () => {
      const response = await client.get("/suggestions");
      if (response.data) {
        setSuggestions(response.data);
      }
      setIsLoading(false);
    };
    request();
  }, []);

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
        Sugestões enviadas pelo site
      </Text>

      {isLoading && (
        <Flex w="100%" justifyContent={"center"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}

      <Table
        border={"1px solid #ccc"}
        bgColor={"rgba(255, 255, 255, 1)"}
        size="sm"
      >
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Tema</Th>
            <Th>Contato</Th>
            <Th>Quem mandou?</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>

        {suggestions.map((sug) => (
          <SuggestionCard key={sug._id} suggestion={sug} />
        ))}
      </Table>
    </Flex>
  );
};

export default CrudSuggestion;
