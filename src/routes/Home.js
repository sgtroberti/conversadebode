import { Flex, Spinner } from "@chakra-ui/react";
import HomeCard from "../components/HomeCard";
import LastEpisode from "../components/LastEpisode";
import EpisodeList from "../components/EpisodeList";
import { useEffect, useState } from "react";
import client from "../services/client";

function Home() {
  const [episodes, setEpisodes] = useState();
  const [lastEp, setLastEp] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const request = async () => {
      const response = await client.get("/episodes");
      if (response.data) {
        const sortedDates = response.data.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        setLastEp(sortedDates.at(-1));
        const episodesToList = [...sortedDates.slice(0, -1)];
        setEpisodes(episodesToList);
        setIsLoading(false);
      }
    };
    request();
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

        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : (
          episodes && (
            <>
              <LastEpisode lastEp={lastEp} />
              <EpisodeList episodes={episodes} />
            </>
          )
        )}
      </Flex>
    </>
  );
}

export default Home;
