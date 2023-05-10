import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";

const Suggestion = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast({
      title: "Sugestão enviada!",
      description:
        "Obrigado por enviar sua sugestão, agora vamos analisar e entrar em contato com a pessoa, se tudo der certo em breve o entrevistaremos!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <>
      <Flex
        p={5}
        mt={[3, 5]}
        mx={"auto"}
        borderRadius={8}
        bgColor={"rgba(255, 255, 255, 0.7)"}
        maxW={["80%", "65%", "50%"]}
        flexDir={"column"}
        gap={[5]}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex flexDir={"column"} gap={4} w={["100%", "90%", "70%"]}>
          <Text
            fontWeight={700}
            fontSize={["1rem", "1.2rem", "1.8rem"]}
            textAlign={"center"}
          >
            Faça a sua sugestão de pauta!
          </Text>
          <Text textAlign={"justify"}>
            Nos ajude a criar conteúdos melhores! Se você conhece alguém que
            você acredita que daria uma boa entrevista de acordo com a temática
            do nosso canal, ou se você mesmo deseja nos dar uma entrevista,
            responda abaixo e nós avaliaremos se a sugestão se encaixa com a
            proposta do canal. Depois disso vamos procurar o indicado para
            conversar e, se tudo der certo, marcaremos a entrevista!
          </Text>
        </Flex>

        <Box
          border="#ccc solid 2px"
          m={5}
          p={8}
          borderRadius={8}
          bgColor={"rgba(255, 255, 255, 0.5)"}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex flexDir={"column"} w="100%" gap={8}>
              <FormControl isRequired>
                <FormLabel>Nome do entrevistado</FormLabel>
                <Input
                  w="100%"
                  bgColor={"white"}
                  border="#ccc solid 1px"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name && <Text color="tomato">Campo obrigatório</Text>}
              </FormControl>
              <FormControl isRequired>
                <FormLabel>
                  Contato do entrevistado (E-mail ou Whatsaap)
                </FormLabel>
                <Input
                  type="text"
                  bgColor={"white"}
                  border="#ccc solid 1px"
                  {...register("contact", { required: true })}
                />
                {errors.contact && (
                  <Text color="tomato">Campo obrigatório</Text>
                )}
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Tema proposto para a entrevista</FormLabel>
                <Input
                  type="text"
                  bgColor={"white"}
                  border="#ccc solid 1px"
                  {...register("theme", { required: true })}
                />
                {errors.theme && <Text color="tomato">Campo obrigatório</Text>}
              </FormControl>
              <FormControl>
                <FormLabel>Se quiser, identifique-se!</FormLabel>
                <Input
                  type="text"
                  bgColor={"white"}
                  border="#ccc solid 1px"
                  {...register("identification")}
                />
              </FormControl>
              <Button type="submit" colorScheme="facebook" variant={"solid"}>
                Enviar
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Suggestion;
