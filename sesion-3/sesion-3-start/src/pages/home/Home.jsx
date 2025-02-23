import { useCallback } from "react";
import "./Home.css";

const Home = () => {
  const handleLogin = useCallback(() => {}, []);

  return (
    <>
      <h2>Continua con Google</h2>
      <button
        type="button"
        title="Iniciar sesíón con Google"
        onClick={handleLogin}
      >
        Iniciar sesión
      </button>
    </>
  );
};

export default Home;
