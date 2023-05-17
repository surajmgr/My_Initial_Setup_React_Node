import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./components/home/home";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
    ]
  },
]);

function App() {
  return (
    <div className="App scroll-smooth">
      <div className="hidden !text-[#2e9efb] !text-[#c47ae0] !text-[#fac865] !text-[#76e199] !text-[#ff627b] !text-[#4edfe2] !text-[#fd6f6f]"></div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
