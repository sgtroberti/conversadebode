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
import { useState } from "react";
import { useForm } from "react-hook-form";
import client from "../services/client";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CrudEpisodeCard from "../components/CrudEpisodeCard";

const CrudEpisode = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [episodes, setEpisodes] = useState([]);
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
      setIsSubmitting(true);
      reset();
      await client.post("/episodes", { ...data });
      setIsSubmitting(false);
      onClose();
      navigate("/episodes", { replace: true });
    } catch (error) {}
  };

  useEffect(() => {
    setIsLoading(true);
    const request = async () => {
      const response = await client.get("/episodes");
      if (response.data) {
        const sortedDates = response.data.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        setEpisodes(sortedDates);
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
          <ModalHeader>Adicionar Episódio</ModalHeader>
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
                <FormControl isInvalid={errors.date}>
                  <FormLabel>Data de exibição</FormLabel>
                  <Input
                    type="date"
                    {...register("date", { required: "Date is required" })}
                  />
                  <FormErrorMessage>
                    {errors.date && errors.date.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.type}>
                  <FormLabel>Título</FormLabel>
                  <Input
                    type="text"
                    {...register("title", { required: "Title is required" })}
                  />
                  <FormErrorMessage>
                    {errors.title && errors.title.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.image}>
                  <FormLabel>Imagem</FormLabel>
                  <Input
                    type="text"
                    {...register("image", { required: "Image is required" })}
                  />
                  <FormErrorMessage>
                    {errors.image && errors.image.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.youtube}>
                  <FormLabel>Youtube</FormLabel>
                  <Input
                    type="text"
                    {...register("youtube", {
                      required: "Youtube is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.youtube && errors.youtube.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.spotify}>
                  <FormLabel>Spotify</FormLabel>
                  <Input
                    type="text"
                    {...register("spotify", {
                      required: "Spotify is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.spotify && errors.spotify.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.interviewed}>
                  <FormLabel>Entrevistado</FormLabel>
                  <Input
                    type="text"
                    {...register("interviewed", {
                      required: "Interviewed is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.interviewed && errors.interviewed.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.description}>
                  <FormLabel>Descrição</FormLabel>
                  <Input
                    type="text"
                    {...register("description", {
                      required: "Description is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.description && errors.description.message}
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
          Episódios
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
              <Th>Título</Th>
              <Th>Entrevistado</Th>
              <Th>Data</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>

          {!isLoading &&
            episodes[0] &&
            episodes.map((ep) => <CrudEpisodeCard key={ep._id} episode={ep} />)}
        </Table>
      </Flex>
    </>
  );
};
export default CrudEpisode;
