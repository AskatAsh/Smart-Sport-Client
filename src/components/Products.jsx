import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Products = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(true);
    const limit = 6;
    fetch(`https://smart-sport-server.vercel.app/allEquipments?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setEquipmentList(data);
      })
      .finally(() => setIsLoading(false));
  }, [user?.email]);

  return (
    <section className="max-w-7xl w-11/12 mx-auto my-16">
      <h1 className="my-8 font-semibold text-3xl text-center">
        Our Exclusive Products
      </h1>

      {isLoading ? (
        <Loading />
      ) : equipmentList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {equipmentList.map((equipment) => (
            <ProductCard
              key={equipment._id}
              equipment={equipment}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-5xl text-gray-400 text-center font-bold">
            You did not add any equipment to the database?
          </h2>
          <Link
            to={"/addEquipment"}
            className="bg-gray-900 px-10 py-4 text-gray-50"
          >
            Add Equipment
          </Link>
        </div>
      )}
    </section>
  );
};

export default Products;