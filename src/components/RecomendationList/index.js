import { Flex, Spinner, Text } from "@chakra-ui/react";
import RecomendationCard from "../RecomendationCard";
import { useEffect, useState } from "react";
import client from "../../services/client";
import InfiniteScroll from "react-infinite-scroll-component";

const RecomendationList = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState();
  const [recomendations, setRecomendations] = useState([]);
  const [reload, setReload] = useState(false);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const request = async () => {
      const response = await client.get("/recomendations");
      if (response.data) {
        setTotalPages(response.data.totalPages);
        if (recomendations[0]) {
          const uniqueElements = recomendations
            .filter((element) => !response.data.response.includes(element))
            .concat(
              response.data.response.filter(
                (element) => !recomendations.includes(element)
              )
            );
          setRecomendations(uniqueElements);
        } else {
          setRecomendations(response.data.response);
        }
        if (hasMore > page) {
          setCanScroll(true);
        }
      }
    };
    request();
  }, []);

  const fetchMore = async () => {
    if (canScroll) {
      console.log("chamou");
      if (page >= totalPages) {
        setHasMore(false);
      } else {
        const response = await client.get(`/recomendations?page=${page + 1}`);
        if (response.data) {
          setPage(page + 1);
          setRecomendations([...recomendations, ...response.data.response]);
          setReload(!reload);
        }
      }
    }
  };

  return (
    <Flex
      bgColor={"rgba(255, 255, 255, 0.7)"}
      borderRadius={8}
      p={2}
      justifyContent={"center"}
      w="100%"
      flexDir={"column"}
    >
      <Text
        w="100%"
        fontWeight={700}
        fontSize={["1rem", "1.5rem", "2rem"]}
        textAlign={"center"}
        p={2}
      >
        Bode Recomenda!
      </Text>
      <Text textAlign={"justify"}>
        Estas recomendações foram selecionadas por ser material desenvolvido por
        ex-entrevistados no canal e/ou pessoas que contribuíram para o
        crescimento do mesmo. Caso você queira anunciar seu livro ou outro tipo
        de material aqui, por favor, entre em contato!
      </Text>

      <InfiniteScroll
        dataLength={recomendations.length}
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
          {recomendations.map((recomendation) => (
            <RecomendationCard
              key={recomendation.id}
              recomendation={recomendation}
            />
          ))}
        </Flex>
      </InfiniteScroll>
    </Flex>
  );
};
export default RecomendationList;
