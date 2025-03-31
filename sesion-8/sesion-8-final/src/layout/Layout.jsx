import "./Layout.css";
import { Suspense } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-content">
        <Suspense fallback={<h1>Cargando...</h1>}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
