import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bgColor={"rgba(255, 255, 255, 0.8)"}
      p={4}
      gap={10}
      justifyContent={"center"}
      alignItems={"center"}
      left={0}
      w={"100%"}
      flexDir={["column", "row"]}
    >
      <Text fontWeight={600}>© GSR SoftHouse | 2023</Text>
      <Text fontWeight={300}>devroberti@gmail.com</Text>
    </Flex>
  );
};
export default Footer;
