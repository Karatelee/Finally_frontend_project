import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import cartService from "@/utils/cart";

const Dishes = () => {
  const [dishes, setDishes] = useState(null);

  const addToCart = (dish) => {
    cartService.addToCart(dish);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/dishes/").then((res) => {
      setDishes(res.data.results);
    });
  }, []);

  return (
    <>
      <Navbar />
      <h1>Dishes</h1>
      {dishes ? (
        <div>
          {dishes.map((dish) => (
            <div key={dish.id}>
              <Link to={`/dishes/${dish.id}`}>
                <img src={dish.image} alt={dish.name} />
                <p>{dish.name}</p>
                <p>{dish.price}</p>
              </Link>
              <button onClick={() => addToCart(dish)}>Add to cart</button>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Dishes;
