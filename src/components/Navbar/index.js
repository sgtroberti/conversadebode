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
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      p={5}
      bgColor={"rgba(255, 255, 255, 0.7)"}
      alignItems="center"
      gap="15px"
      maxW={"80%"}
      margin={"auto"}
      mt={[3, 5]}
      borderRadius={8}
      justifyContent={"space-between"}
    >
      <Flex gap={5}>
        <Image
          src="assets/yt.png"
          maxH={"50px"}
          display={["none", "none", "flex"]}
        />
        <Text fontSize={["1.2rem", "1.8rem"]} fontWeight={"bold"}>
          Conversa de Bode
        </Text>
      </Flex>
      <Flex gap={10} display={["none", "none", "none", "flex"]}>
        <Link to={"/"}>
          <Button colorScheme="facebook">Home</Button>
        </Link>
        <Link to={"/sugestao"}>
          <Button colorScheme="facebook">Sugestão de pauta</Button>
        </Link>
      </Flex>
      <Flex gap={10} display={["flex", "flex", "flex", "none"]}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            colorScheme="facebook"
          />
          <MenuList>
            <Link to={"/"}>
              <MenuItem>Home</MenuItem>
            </Link>
            <Link to={"/sugestao"}>
              <MenuItem>Sugestão de pauta</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
