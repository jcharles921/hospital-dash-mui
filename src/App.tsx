import React from "react";
import { Suspense } from "react";
import { Box } from "@mui/material";
import Navigation from "./routes";
import Loader from "./utils/Loader";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100wh"
            height="100vh"
          >
            <Loader color="#000000" size={50} />
          </Box>
        }
      >
        <Navigation />
      </Suspense>
    </>
  );
}

export default App;
