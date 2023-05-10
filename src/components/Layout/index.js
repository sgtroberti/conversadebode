import { Route, Routes, useLocation } from "react-router-dom";
import "./layout.css";
import Home from "../../routes/Home";
import Suggestion from "../../routes/Suggestion";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import FadeTransition from "./FadeTransition";
import { TransitionGroup } from "react-transition-group";
import Footer from "../Footer";

const Layout = () => {
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(null);

  useEffect(() => {
    setPreviousLocation(location);
  }, [location]);

  return (
    <>
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
          </Routes>
        </TransitionGroup>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
