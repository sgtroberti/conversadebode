import { Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.js";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      login: event.target.user.value,
      password: event.target.password.value,
    };

    try {
      await auth.signin(data, () => navigate("/admin", { replace: true }));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex w="100%" alignItems={"center"} flexDir={"column"}>
      <Flex
        flexDir={"column"}
        minW="350px"
        border={"1px solid #ccc"}
        bgColor={"rgba(255, 255, 255, 0.7)"}
        borderRadius={16}
        p={5}
        gap={1}
      >
        <form onSubmit={handleSubmit}>
          <FormLabel>Login:</FormLabel>
          <Input bgColor={"white"} id="user" name="user" type="text" mb={8} />
          <FormLabel>Senha:</FormLabel>
          <Input
            bgColor={"white"}
            id="password"
            name="password"
            type="password"
            mb={8}
          />
          <Button
            w="100%"
            isLoading={isLoading}
            loadingText="Logando..."
            type="submit"
            colorScheme={"green"}
          >
            Entrar
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default Login;
