import "./Home.css";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1> Descubre la ansiedad </h1>
      <button onClick={()=> navigate("ansiedad")} > Ver más </button>
    </>
  );
};

export default Home;
