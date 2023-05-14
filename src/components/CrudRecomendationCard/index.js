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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import client from "../../services/client";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const CrudRecomendationCard = ({ recomendation }) => {
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
      const response = await client.delete(
        `/recomendations/${recomendation._id}`
      );
      response && navigate("/recomendations", { replace: true });
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
          const newRecomendation = { image, ...rest };
          setIsSubmitting(true);
          reset();
          await client.patch(`/recomendations/${recomendation._id}`, {
            ...newRecomendation,
          });
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

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Recomendação</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <ModalBody>
              <Flex flexDir={"column"} gap={2}>
                <FormControl isInvalid={errors.type}>
                  <FormLabel>Tipo</FormLabel>
                  <Input
                    defaultValue={recomendation.type}
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
                    defaultValue={recomendation.name}
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
                    defaultValue={recomendation.creator}
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
                    defaultValue={recomendation.where}
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
          <Td>{recomendation.type}</Td>
          <Td>{recomendation.name}</Td>
          <Td>{recomendation.creator}</Td>
          <Td>{recomendation.where}</Td>
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

export default CrudRecomendationCard;
