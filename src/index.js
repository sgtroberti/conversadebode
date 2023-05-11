import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import Background from "./components/Background";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Background />
    <ChakraProvider>
      <AuthProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
