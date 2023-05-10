import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bgColor={"blue.100"}
      p={5}
      gap={10}
      justifyContent={"center"}
      alignItems={"center"}
      position={"absolute"}
      bottom={["-110px", "-80px"]}
      left={0}
      w={"100%"}
    >
      <Text fontWeight={600}>© GSR SoftHouse | 2023</Text>
      <Text fontWeight={300}>devroberti@gmail.com</Text>
    </Flex>
  );
};
export default Footer;
