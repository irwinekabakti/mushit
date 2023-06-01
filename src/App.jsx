import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";

const App = () => {
  return (
    <>
      <h1 className="bg-red-300 text-green-400">Test</h1>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
