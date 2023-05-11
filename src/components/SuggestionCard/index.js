import { Button, Tbody, Td, Tr } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import client from "../../services/client";
import { useNavigate } from "react-router-dom";

const SuggestionCard = ({ suggestion }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      const response = await client.delete(`/suggestions/${suggestion._id}`);
      response && navigate("/sugestoes", { replace: true });
    } catch (error) {}
  };

  return (
    <Tbody
      bgColor={"rgba(255, 255, 255, 0.8)"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDir={"column"}
      p={2}
      borderRadius={8}
      gap={2}
    >
      <Tr>
        <Td>{suggestion.name}</Td>
        <Td>{suggestion.theme}</Td>
        <Td>{suggestion.contact}</Td>
        <Td>{suggestion.name}</Td>
        <Td>
          <Button size={"xs"} onClick={handleDelete} colorScheme="red">
            <DeleteIcon />
          </Button>
        </Td>
      </Tr>
    </Tbody>
  );
};
export default SuggestionCard;
