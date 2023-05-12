import { Route, Routes, useLocation } from "react-router-dom";
import "./layout.css";
import Home from "../../routes/Home";
import Suggestion from "../../routes/Suggestion";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import FadeTransition from "./FadeTransition";
import { TransitionGroup } from "react-transition-group";
import Footer from "../Footer";
import Recomendation from "../../routes/Recomendation";
import { Flex } from "@chakra-ui/react";
import Login from "../../routes/Login";
import Admin from "../../routes/Admin";
import { RequireAuth } from "../../context/AuthContext";
import CrudSuggestion from "../../routes/CrudSuggestion";
import CrudEpisode from "../../routes/CrudEpisode";
import CrudRecomendation from "../../routes/CrudRecomendation";

const Layout = () => {
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(null);

  useEffect(() => {
    setPreviousLocation(location);
  }, [location]);

  return (
    <Flex
      flexDir={"column"}
      gap={5}
      minH={"100vh"}
      justifyContent={"space-between"}
    >
      <Navbar />
      <div className="transition-container">
        <TransitionGroup>
          <Routes>
            <Route
              path="/"
              element={
                <FadeTransition
                  location={location}
                  previousLocation={previousLocation}
                >
                  <Home />
                </FadeTransition>
              }
            />
            <Route
              path="/sugestao"
              element={
                <FadeTransition
                  location={location}
                  previousLocation={previousLocation}
                >
                  <Suggestion />
                </FadeTransition>
              }
            />
            <Route
              path="/boderecomenda"
              element={
                <FadeTransition
                  location={location}
                  previousLocation={previousLocation}
                >
                  <Recomendation />
                </FadeTransition>
              }
            />
            <Route
              path="/login"
              element={
                <FadeTransition
                  location={location}
                  previousLocation={previousLocation}
                >
                  <Login />
                </FadeTransition>
              }
            />
            <Route
              path="/admin"
              element={
                <FadeTransition
                  location={location}
                  previousLocation={previousLocation}
                >
                  <RequireAuth>
                    <Admin />
                  </RequireAuth>
                </FadeTransition>
              }
            />
            <Route
              path="/sugestoes"
              element={
                <FadeTransition
                  location={location}
                  previousLocation={previousLocation}
                >
                  <RequireAuth>
                    <CrudSuggestion />
                  </RequireAuth>
                </FadeTransition>
              }
            />
            <Route
              path="/episodes"
              element={
                <FadeTransition
                  location={location}
                  previousLocation={previousLocation}
                >
                  <RequireAuth>
                    <CrudEpisode />
                  </RequireAuth>
                </FadeTransition>
              }
            />
            <Route
              path="/recomendations"
              element={
                <FadeTransition
                  location={location}
                  previousLocation={previousLocation}
                >
                  <RequireAuth>
                    <CrudRecomendation />
                  </RequireAuth>
                </FadeTransition>
              }
            />
          </Routes>
        </TransitionGroup>
      </div>
      <Footer />
    </Flex>
  );
};

export default Layout;
