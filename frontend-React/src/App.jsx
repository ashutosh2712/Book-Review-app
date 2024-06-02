import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Book from "./pages/Book";
import Books from "./pages/Books";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Books />,
    },
    {
      path: "books/:id",
      element: <Book />,
    },
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
