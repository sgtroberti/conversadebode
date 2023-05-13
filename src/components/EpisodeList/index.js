import { Flex, Spinner, Text } from "@chakra-ui/react";
import EpisodeCard from "../EpisodeCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import client from "../../services/client";

const EpisodeList = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState();
  const [episodes, setEpisodes] = useState([]);
  const [reload, setReload] = useState(false);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const request = async () => {
      const response = await client.get("/episodes");
      if (response.data) {
        setTotalPages(response.data.totalPages);
        if (episodes[0]) {
          const uniqueElements = episodes
            .filter((element) => !response.data.response.includes(element))
            .concat(
              response.data.response.filter(
                (element) => !episodes.includes(element)
              )
            );
          setEpisodes(uniqueElements);
        } else {
          const [primeiro, ...rest] = response.data.response;
          setEpisodes(rest);
        }
        setCanScroll(true);
      }
    };
    request();
  }, []);

  const fetchMore = async () => {
    if (canScroll) {
      if (page >= totalPages) {
        setHasMore(false);
      }

      const response = await client.get(`/episodes?page=${page + 1}`);
      if (response.data) {
        setPage(page + 1);
        setEpisodes([...episodes, ...response.data.response]);
        setReload(!reload);
      }
    }
  };

  return (
    <Flex
      flexDir={"column"}
      w="100%"
      justifyContent={"center"}
      gap={5}
      p={5}
      bgColor={"rgba(255,255,254,0.6)"}
      borderRadius={8}
    >
      <Text
        textAlign={"center"}
        fontWeight={700}
        fontSize={["1.2rem", "1.5rem", "2rem"]}
      >
        Lista de Episódios
      </Text>
      <InfiniteScroll
        dataLength={episodes.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={
          <Flex overflow={"hidden"} justifyContent={"center"} w="100%">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Flex>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Por enquanto é só!</b>
          </p>
        }
      >
        <Flex p={5} justifyContent={"space-between"} gap={5} wrap={"wrap"}>
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </Flex>
      </InfiniteScroll>
    </Flex>
  );
};
export default EpisodeList;
