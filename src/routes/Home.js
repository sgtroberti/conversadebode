import { Flex } from "@chakra-ui/react";
import HomeCard from "../components/HomeCard";
import LastEpisode from "../components/LastEpisode";
import EpisodeList from "../components/EpisodeList";
import { useEffect, useState } from "react";
import client from "../services/client";

function Home() {
  const [episodes, setEpisodes] = useState();

  useEffect(() => {
    const request = async () => {
      const response = await client.get("/episodes");
      if (response.data) {
        setEpisodes(response.data);
      }
    };
    request();
    console.log(episodes);
  }, []);

  return (
    <>
      <Flex
        p={5}
        mt={[3, 5]}
        mx={"auto"}
        borderRadius={8}
        bgColor={"rgba(255, 255, 255, 0.7)"}
        w={["96%", "90%", "85%", "70%"]}
        flexDir={"column"}
        gap={[3]}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HomeCard />
        {episodes && (
          <>
            <LastEpisode lastEp={episodes.at(-1)} />
            <EpisodeList episodes={episodes} />
          </>
        )}
      </Flex>
    </>
  );
}

export default Home;
