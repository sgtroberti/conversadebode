import { useEffect, useState } from "react";
import client from "../services/client";
import { Flex, Table, Text, Th, Thead, Tr } from "@chakra-ui/react";
import SuggestionCard from "../components/SuggestionCard";

const CrudSuggestion = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const request = async () => {
      const response = await client.get("/suggestions");
      if (response.data) {
        setSuggestions(response.data);
      }
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
