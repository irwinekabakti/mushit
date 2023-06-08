import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";

const App = () => {
  return (
    <>
      <main className="bg-green-50 min-h-screen">
        <div className="max-w-[1440px] mx-auto">
          <RouterProvider router={router} />
        </div>
      </main>
    </>
  );
};

export default App;
