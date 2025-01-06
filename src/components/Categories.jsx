import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
// import cricket from "../../src/assets/icons/cricket.png";
// import football from "../../src/assets/icons/soccer.png";
// import tennis from "../../src/assets/icons/tennis.png";
// import basketball from "../../src/assets/icons/basketball.png";

const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    setIsLoading(true);
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategoryList(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://smart-sport-server.vercel.app/allEquipments")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const uniqueCategories = data.reduce((acc, item) => {
  //         const exists = acc.find((cat) => cat.category === item.category);
  //         if (!exists) {
  //           acc.push({ id: item._id, category: item.category });
  //         }
  //         return acc;
  //       }, []);
  //       setCategoryList(uniqueCategories);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);

  return (
    <section className="max-w-7xl w-11/12 mx-auto my-16">
      <h2 className="my-8 font-semibold text-3xl text-center text-gray-800 dark:text-gray-200">
        Explore Our Categories
      </h2>

      {isLoading ? (
        <Loading />
      ) : categoryList.length > 0 ? (
        <ul className="grid max-[425px]:grid-cols-2 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {categoryList.map((equipment) => (
            <li
              className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 py-3 px-6 text-xl text-center text-gray-900 dark:text-gray-100 font-semibold flex flex-col gap-2 items-center"
              key={equipment.id}
            >
              <img className="w-20" src={equipment?.icon} alt={`icon of ${equipment?.category} category`} />
              {equipment?.category}
            </li>
          ))}
        </ul>
      ) : (
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-5xl text-gray-400 dark:text-gray-600 text-center font-bold">
            You did not add any equipment to the database?
          </h2>
          <Link
            to={"/addEquipment"}
            className="bg-gray-900 dark:bg-gray-100 px-10 py-4 text-gray-50 dark:text-gray-900"
          >
            Add Equipment
          </Link>
        </div>
      )}
    </section>
  );
};

export default Categories;