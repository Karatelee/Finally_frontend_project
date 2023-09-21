import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";

const Dish = () => {
  const { id } = useParams();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/dishes/${id}/`).then((res) => {
      setDish(res.data);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <h1>Dish</h1>
      {dish ? (
        <div>
          <img src={dish.image} alt={dish.name} />
          <p>{dish.name}</p>
          <p>{dish.price}</p>
          <p>{dish.description}</p>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Dish;
