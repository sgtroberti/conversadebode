import {
  Flex,
  Image,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout(() => navigate("/", { replace: true }));
  };

  return (
    <Flex
      p={3}
      bgColor={"rgba(255, 255, 255, 0.7)"}
      alignItems="center"
      minW={"100%"}
      justifyContent={"space-between"}
    >
      <Flex gap={5}>
        <Image
          src="assets/yt.png"
          maxH={"50px"}
          display={["none", "none", "flex"]}
        />
        {auth.user?._id ? (
          <Text fontSize={["1.2rem", "1.8rem"]} fontWeight={700} color={"red"}>
            Admin
          </Text>
        ) : (
          <Text fontSize={["1.2rem", "1.8rem"]} fontWeight={700}>
            Conversa de Bode
          </Text>
        )}
      </Flex>

      {!auth.user?._id ? (
        <Flex gap={5} display={["none", "none", "none", "flex"]}>
          <Link to={"/"}>
            <Button colorScheme="facebook">Home</Button>
          </Link>
          <Link to={"/sugestao"}>
            <Button colorScheme="facebook">Sugestão de pauta</Button>
          </Link>
          <Link to={"/boderecomenda"}>
            <Button colorScheme="facebook">Bode recomenda</Button>
          </Link>
          <Link to={"/login"}>
            <Button colorScheme="green">Login</Button>
          </Link>
        </Flex>
      ) : (
        <Flex gap={5} display={["none", "none", "none", "flex"]}>
          <Link to={"/recomendations"}>
            <Button colorScheme="facebook">Recomendações</Button>
          </Link>
          <Link to={"/episodes"}>
            <Button colorScheme="facebook">Episódios</Button>
          </Link>
          <Link to={"/sugestoes"}>
            <Button colorScheme="facebook">Sugestões</Button>
          </Link>
          <Button onClick={handleLogout} colorScheme="red">
            Logout
          </Button>
        </Flex>
      )}

      <Flex gap={10} display={["flex", "flex", "flex", "none"]}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            colorScheme="facebook"
          />
          {!auth.user?._id ? (
            <MenuList>
              <Link to={"/"}>
                <MenuItem>Home</MenuItem>
              </Link>
              <Link to={"/sugestao"}>
                <MenuItem>Sugestão de pauta</MenuItem>
              </Link>
              <Link to={"/boderecomenda"}>
                <MenuItem>Bode recomenda</MenuItem>
              </Link>
              <Link to={"/login"}>
                <MenuItem>Login</MenuItem>
              </Link>
            </MenuList>
          ) : (
            <MenuList>
              <Link to={"/"}>
                <MenuItem>Home</MenuItem>
              </Link>
              <Link to={"/recomendations"}>
                <MenuItem>Recomendações</MenuItem>
              </Link>
              <Link to={"/episodes"}>
                <MenuItem>Episódios</MenuItem>
              </Link>
              <Link to={"/sugestoes"}>
                <MenuItem>Sugestões</MenuItem>
              </Link>
              <MenuItem onClick={handleLogout} colorScheme="red">
                Logout
              </MenuItem>
            </MenuList>
          )}
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
