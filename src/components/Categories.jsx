import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://smart-sport-server.vercel.app/allEquipments")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = data.reduce((acc, item) => {
            const exists = acc.find((cat) => cat.category === item.category);
            if (!exists) {
              acc.push({ id: item._id, category: item.category });
            }
            return acc;
          }, []);
        setCategoryList(uniqueCategories);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="max-w-7xl w-11/12 mx-auto py-10">
      <h2 className="my-8 font-semibold text-3xl text-center">
        Explore Our Categories
      </h2>

      {isLoading ? (
        <Loading />
      ) : categoryList.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {categoryList.map((equipment) => (
            <li className="bg-white border-2 border-gray-300 py-3 px-6 text-lg text-center text-gray-900 font-semibold" key={equipment.id}>{equipment?.category}</li>
          ))}
        </ul>
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

export default Categories;