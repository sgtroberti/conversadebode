import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Table,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import client from "../services/client";
import CrudRecomendationCard from "../components/CrudRecomendationCard";

const CrudRecomendation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recomendations, setRecomendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    try {
      const { image: oldImage, ...rest } = data;
      let image;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        async () => {
          image = reader.result;
          const newEpisode = { image, ...rest };
          setIsSubmitting(true);
          reset();
          await client.post("/recomendations", { ...newEpisode });
          setIsSubmitting(false);
          onClose();
          navigate("/recomendations", { replace: true });
        },
        false
      );
      if (oldImage[0]) {
        reader.readAsDataURL(oldImage[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const request = async () => {
      const response = await client.get("/recomendations/all");
      if (response.data) {
        setRecomendations(response.data);
        setIsLoading(false);
      }
    };
    request();
  }, []);
  return (
    <>
      {/* Modal cadastro */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Recomendação</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <ModalBody>
              <Flex flexDir={"column"} gap={2}>
                <FormControl isInvalid={errors.type}>
                  <FormLabel>Tipo</FormLabel>
                  <Input
                    type="text"
                    {...register("type", { required: "Type is required" })}
                  />
                  <FormErrorMessage>
                    {errors.type && errors.type.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.name}>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.creator}>
                  <FormLabel>Autor</FormLabel>
                  <Input
                    type="text"
                    {...register("creator", {
                      required: "Creator is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.creator && errors.creator.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.image}>
                  <FormLabel>Imagem</FormLabel>
                  <Input
                    type="file"
                    accept="image/*"
                    {...register("image", { required: "Image is required" })}
                  />
                  <FormErrorMessage>
                    {errors.image && errors.image.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.where}>
                  <FormLabel>Onde encontrar?</FormLabel>
                  <Input
                    type="text"
                    {...register("where", {
                      required: "Where is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.where && errors.where.message}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
                Salvar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      {/* Restante página */}

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

        <Button colorScheme="green" onClick={onOpen}>
          Cadastrar
        </Button>

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
              <Th>Tipo</Th>
              <Th>Nome</Th>
              <Th>Autor</Th>
              <Th>Onde encontrar</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>

          {!isLoading &&
            recomendations[0] &&
            recomendations.map((rec) => (
              <CrudRecomendationCard key={rec._id} recomendation={rec} />
            ))}
        </Table>
      </Flex>
    </>
  );
};
export default CrudRecomendation;
