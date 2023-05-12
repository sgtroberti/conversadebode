import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Tbody, Td, Tr } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import client from "../../services/client";
import format from "date-fns/format";
import addHours from "date-fns/addHours";

const CrudEpisodeCard = ({ episode }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      const response = await client.delete(`/episodes/${episode._id}`);
      response && navigate("/episodes", { replace: true });
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
        <Td>{episode.type}</Td>
        <Td>{episode.title}</Td>
        <Td>{episode.interviewed}</Td>
        <Td>{format(addHours(new Date(episode.date), 3), "dd/MM/yyyy")}</Td>
        <Td>
          <Button size={"xs"} onClick={handleDelete} colorScheme="red">
            <DeleteIcon />
          </Button>
        </Td>
      </Tr>
    </Tbody>
  );
};

export default CrudEpisodeCard;
