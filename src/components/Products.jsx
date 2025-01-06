import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Products = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const limit = 8;
    fetch(`https://smart-sport-server.vercel.app/allEquipments?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setEquipmentList(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="max-w-7xl w-11/12 mx-auto my-16">
      <h2 className="my-8 font-semibold text-3xl text-center">
        Our Exclusive Products
      </h2>

      {isLoading ? (
        <Loading />
      ) : equipmentList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
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