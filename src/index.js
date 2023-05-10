import React from "react";
import { createRoot } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Background from "./components/Background";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Background />
    <ChakraProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
