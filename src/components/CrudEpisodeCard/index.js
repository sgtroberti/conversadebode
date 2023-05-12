import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
  Tbody,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import client from "../../services/client";
import format from "date-fns/format";
import addHours from "date-fns/addHours";
import { useForm } from "react-hook-form";
import { useState } from "react";

const CrudEpisodeCard = ({ episode }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = async () => {
    try {
      const response = await client.delete(`/episodes/${episode._id}`);
      response && navigate("/episodes", { replace: true });
    } catch (error) {}
  };

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
          await client.patch(`/episodes/${episode._id}`, { ...newEpisode });
          setIsSubmitting(false);
          onClose();
          navigate("/episodes", { replace: true });
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

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Episódio</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <ModalBody>
              <Flex flexDir={"column"} gap={2}>
                <FormControl isInvalid={errors.type}>
                  <FormLabel>Tipo</FormLabel>
                  <Input
                    type="text"
                    {...register("type", { required: "Type is required" })}
                    defaultValue={episode.type}
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
                    defaultValue={format(new Date(episode.date), "yyyy-MM-dd")}
                  />
                  <FormErrorMessage>
                    {errors.date && errors.date.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.type}>
                  <FormLabel>Título</FormLabel>
                  <Input
                    type="text"
                    defaultValue={episode.title}
                    {...register("title", { required: "Title is required" })}
                  />
                  <FormErrorMessage>
                    {errors.title && errors.title.message}
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
                <FormControl isInvalid={errors.youtube}>
                  <FormLabel>Youtube</FormLabel>
                  <Input
                    type="text"
                    defaultValue={episode.youtube}
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
                    defaultValue={episode.spotify}
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
                    defaultValue={episode.interviewed}
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
                    defaultValue={episode.description}
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
              <Button
                type="submit"
                colorScheme="yellow"
                isLoading={isSubmitting}
              >
                Salvar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

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
            <Flex gap={3}>
              <Button size={"xs"} onClick={handleDelete} colorScheme="red">
                <DeleteIcon />
              </Button>
              <Button size={"xs"} onClick={onOpen} colorScheme="yellow">
                <EditIcon />
              </Button>
            </Flex>
          </Td>
        </Tr>
      </Tbody>
    </>
  );
};

export default CrudEpisodeCard;
