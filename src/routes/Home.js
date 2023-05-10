import { Flex } from "@chakra-ui/react";
import HomeCard from "../components/HomeCard";
import LastEpisode from "../components/LastEpisode";
import EpisodeList from "../components/EpisodeList";
import episodes from "../mock/episodes";

function Home() {
  return (
    <>
      <Flex
        p={5}
        mt={[3, 5]}
        mx={"auto"}
        borderRadius={8}
        bgColor={"rgba(255, 255, 255, 0.7)"}
        maxW={["80%", "75%", "60%"]}
        flexDir={"column"}
        gap={[5, 8, 10]}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HomeCard />
        <LastEpisode lastEp={episodes.at(-1)} />
        <EpisodeList episodes={episodes} />
      </Flex>
    </>
  );
}

export default Home;
