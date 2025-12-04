import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/default.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
