import { Flex, Image, Text } from "@chakra-ui/react";

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
      <Flex gap={2}>
        <a href="mailto:devroberti@gmail.com">
          <Image w={"100px"} borderRadius={8} src="./appiducks.png" />
        </a>
        <Text fontWeight={600}>© 2023</Text>
      </Flex>
    </Flex>
  );
};
export default Footer;
